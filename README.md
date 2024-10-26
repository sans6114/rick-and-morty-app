# Rick & Morty Character Search 🚀

A responsive web application that allows users to search and filter characters from the Rick & Morty universe using the official Rick & Morty API.

## 🌟 Features

- **Real-time Character Search:**
  - Dynamic search as you type
  - Debounced API calls to prevent excessive requests
  - Duplicate search prevention
  - Loading state indicators

- **Advanced Filtering System:**
  - Filter by character status (Alive)
  - Filter by species
  - Combinable filters for precise results

- **Responsive Grid Display:**
  - Character cards with essential information
  - Character image
  - Name
  - Status with visual indicators
  - Species information

## 🛠️ Technical Implementation

### API Integration
The project uses the [Rick & Morty API](https://rickandmortyapi.com/documentation/#character) with the following endpoints:

```javascript
// Basic character search
GET https://rickandmortyapi.com/api/character/?name=rick

// Search with status filter
GET https://rickandmortyapi.com/api/character/?name=rick&status=alive
```

### Key Technical Features
- Implemented debounce mechanism for search optimization
- Responsive grid layout with tailwind
- Real-time search updates with loading states
- Filter combination logic for advanced searching

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000` in your browser

## 🎯 Challenge Requirements Completed

### Basic Requirements ✅
- [x] Search input field with search button
- [x] Responsive character grid
- [x] Functional search form
- [x] API data fetching
- [x] Loading states

### Advanced Features ✅
- [x] Prevention of consecutive duplicate searches
- [x] Automatic search while typing
- [x] Debounced search implementation
- [x] Additional filters:
  - [x] Status filter (Alive/Dead/Unknown)
  - [x] Species filter

## 🤝 Contributing

Feel free to contribute to this project! Here's how:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Improvements

- Add pagination support
- Implement character detail views
- Add more filter options
- Add unit tests
- Implement caching for frequently searched results

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Rick & Morty API](https://rickandmortyapi.com/) for providing the free API
- Rick & Morty creators for the amazing content