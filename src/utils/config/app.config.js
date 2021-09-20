export const APP_CONFIG = {
    TITLE: 'Air Quality Index',
    SOCKET_SERVER_URL: 'wss://city-ws.herokuapp.com',
    CATEGORIES: [
      { name: 'GOOD', startRange: 0, endRange: 50, color: '#52B157' },
      { name: 'SATISFACTORY', startRange: 51, endRange: 100, color: '#a6d86f' },
      { name: 'MODERATE', startRange: 101, endRange: 200, color: '#e6e600' },
      { name: 'POOR', startRange: 201, endRange: 300, color: 'ffbf00' },
      { name: 'VERY POOR', startRange: 301, endRange: 400, color: '#ff0000' },
      { name: 'SEVERE', startRange: 401, endRange: 500, color: '#cc0000' },
    ],
  };
  