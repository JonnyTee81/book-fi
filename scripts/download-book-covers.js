const https = require('https');
const fs = require('fs');
const path = require('path');

// Book cover URLs from Amazon or other sources
const bookCovers = {
  '1': 'https://images-na.ssl-images-amazon.com/images/P/0446677469.01.L.jpg', // Rich Dad Poor Dad
  '2': 'https://images-na.ssl-images-amazon.com/images/P/0060555661.01.L.jpg', // The Intelligent Investor
  '3': 'https://images-na.ssl-images-amazon.com/images/P/0857197681.01.L.jpg', // The Psychology of Money
  '4': 'https://images-na.ssl-images-amazon.com/images/P/0761147489.01.L.jpg', // I Will Teach You to Be Rich
  '5': 'https://images-na.ssl-images-amazon.com/images/P/1533667926.01.L.jpg', // The Simple Path to Wealth
  '6': 'https://images-na.ssl-images-amazon.com/images/P/1585424331.01.L.jpg', // Think and Grow Rich
  '7': 'https://images-na.ssl-images-amazon.com/images/P/0785289089.01.L.jpg', // The Total Money Makeover
  '8': 'https://images-na.ssl-images-amazon.com/images/P/1589795474.01.L.jpg', // The Millionaire Next Door
  '9': 'https://images-na.ssl-images-amazon.com/images/P/0743200403.01.L.jpg', // One Up On Wall Street
  '10': 'https://images-na.ssl-images-amazon.com/images/P/0143115766.01.L.jpg' // Your Money or Your Life
};

// Alternative: Use Google Books API or OpenLibrary covers
const alternativeCovers = {
  '1': 'https://covers.openlibrary.org/b/isbn/9780446677469-L.jpg',
  '2': 'https://covers.openlibrary.org/b/isbn/9780060555665-L.jpg',
  '3': 'https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg',
  '4': 'https://covers.openlibrary.org/b/isbn/9780761147480-L.jpg',
  '5': 'https://covers.openlibrary.org/b/isbn/9781533667922-L.jpg',
  '6': 'https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg',
  '7': 'https://covers.openlibrary.org/b/isbn/9780785289081-L.jpg',
  '8': 'https://covers.openlibrary.org/b/isbn/9781589795471-L.jpg',
  '9': 'https://covers.openlibrary.org/b/isbn/9780743200400-L.jpg',
  '10': 'https://covers.openlibrary.org/b/isbn/9780143115762-L.jpg'
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ Downloaded: ${filepath}`);
          resolve();
        });
      } else if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirects
        const redirectUrl = response.headers.location;
        downloadImage(redirectUrl, filepath).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlink(filepath, () => {}); // Delete the file
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(filepath, () => {}); // Delete the file
      reject(err);
    });
  });
}

async function downloadAllCovers() {
  const publicDir = path.join(__dirname, '..', 'public', 'images', 'books');
  
  // Ensure directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  console.log('🚀 Starting book cover downloads...');
  console.log(`📁 Saving to: ${publicDir}`);

  for (const [bookId, url] of Object.entries(alternativeCovers)) {
    const filename = `book-${bookId}.jpg`;
    const filepath = path.join(publicDir, filename);
    
    try {
      await downloadImage(url, filepath);
      await new Promise(resolve => setTimeout(resolve, 500)); // Rate limiting
    } catch (error) {
      console.error(`❌ Failed to download book ${bookId}:`, error.message);
      
      // Try alternative source if primary fails
      if (bookCovers[bookId]) {
        try {
          console.log(`🔄 Trying alternative source for book ${bookId}...`);
          await downloadImage(bookCovers[bookId], filepath);
        } catch (altError) {
          console.error(`❌ Alternative source also failed for book ${bookId}:`, altError.message);
        }
      }
    }
  }
  
  console.log('✨ Book cover download process completed!');
}

// Run the download
downloadAllCovers().catch(console.error);