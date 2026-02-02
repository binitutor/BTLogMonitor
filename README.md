# BT Log Monitor - Real-Time Distributed Log Analysis & Monitoring

A professional, responsive frontend application for real-time distributed log analysis and monitoring. BT Log Monitor provides comprehensive system monitoring, log management, analytics, and alerting capabilities with an intuitive user interface.

## Project Overview

BT Log Monitor is a modern web-based log monitoring and analysis platform designed to help teams monitor distributed systems, analyze logs in real-time, track system performance metrics, and manage alerts efficiently. The application features a professional dark-themed interface with responsive design for desktop and mobile devices.

## Technology Stack

- **HTML5** - Semantic markup structure
- **CSS3** - Advanced styling with custom properties and animations
- **JavaScript (ES6+)** - Interactive functionality and DOM manipulation
- **Bootstrap 5.3** - Responsive grid system and components
- **Chart.js 4.4** - Data visualization and charting library
- **DataTables 1.13** - Advanced table functionality with sorting and filtering
- **SweetAlert2 11.7** - Beautiful notification dialogs
- **Font Awesome 6.4** - Icon library
- **jQuery 3.6** - DOM manipulation and utilities

## Color Scheme

- **Sidebar & Navigation**: `#333333` (Dark Gray)
- **Sidebar Text**: `#9B9B9B` (Medium Gray) / `#fff` (White on hover)
- **Left Column Background**: `#1C1E29` (Very Dark)
- **Left Column Heading**: `#688B89` (Teal)
- **Left Column Text**: `#7A7C87` (Gray)
- **Right Column Background**: `#fff` (White)
- **Accent Colors**: 
  - `#A5D1C7` (Teal)
  - `#D8C1B8` (Beige)
  - `#CED9E1` (Light Gray)
  - `#525252` (Dark Gray)

## Features Implemented

### 1. **Responsive Layout**
- Fixed collapsible sidebar menu (250px, collapsible to 80px)
- Top navigation bar with breadcrumbs and profile dropdown
- Two-column content area (25% left, 75% right)
- Mobile-friendly design with responsive breakpoints
- Smooth transitions and animations

### 2. **Navigation System**
- **Sidebar Menu Items:**
  - Dashboard
  - Logs
  - Analytics
  - Monitoring
  - Alerts
  - Settings
- Dynamic page switching without page reloads
- Breadcrumb navigation in top bar
- Active menu state highlighting

### 3. **Profile & Authentication**
- User profile icon in top-right corner
- Dropdown menu with options:
  - My Profile
  - Settings
  - Logout
- SweetAlert2 confirmation dialogs for logout

### 4. **Dashboard Page**
- **System Status Card** (Left Column):
  - Servers Online count
  - Active Connections count
  - Logs Today count
  - Average Response Time
  - Real-time data updates every 30 seconds
  
- **Quick Actions** (Left Column):
  - Export Logs button
  - Apply Filter button
  - Refresh Data button

- **Charts & Visualizations** (Right Column):
  - **Logs per Hour** - Line chart showing hourly log volume
  - **Error Distribution** - Doughnut chart with error types
  - **System Performance** - Horizontal bar chart for resource usage
  - **Network Activity** - Area chart with inbound/outbound traffic
  - **Recent Logs Table** - DataTable with filtering and sorting

### 5. **Logs Page**
- Advanced filter section with:
  - Search input
  - Log level dropdown
  - Date picker
  - Apply filters button
- Full logs table with:
  - Timestamp, Source, Level, Message columns
  - DataTables integration for pagination and sorting
  - Color-coded severity badges
  - View action buttons

### 6. **Analytics Page**
- **Daily Log Volume** - Bar chart showing weekly trends
- **Top Sources** - Radar chart for top log sources
- **Error Rate by Source** - Line chart tracking error rates

### 7. **Monitoring Page**
- System health cards showing:
  - CPU Usage with server icon
  - Memory Usage with memory icon
  - Disk Usage with database icon
- **Real-time Metrics** - Line chart with 24-hour trend data
- Visual indicators with hover effects

### 8. **Alerts Page**
- Alert items with categorization:
  - **Error Alerts** - Red/pink background (Critical issues)
  - **Warning Alerts** - Orange/beige background (Caution notices)
  - **Info Alerts** - Blue/teal background (Informational)
- Alert details including:
  - Icon indicator
  - Alert title and description
  - Timestamp

### 9. **Settings Page**
- **General Settings:**
  - Application Name input
  - Auto-refresh Interval configuration
  - Theme selection (Dark/Light)
  
- **Notification Settings:**
  - Email Alerts toggle
  - Browser Notifications toggle
  - SMS Alerts toggle
  
- Save Settings button with confirmation

### 10. **Data Visualization**
- 7 different chart types implemented:
  - Line charts (Logs per Hour, Error Rate, Metrics)
  - Bar charts (System Performance, Daily Volume)
  - Doughnut chart (Error Distribution)
  - Radar chart (Top Sources)
  - Area charts (Network Activity)
- Responsive charts that resize with container
- Color-coded datasets using accent colors
- Legend and axis labels
- Grid lines and styling

### 11. **Tables & Data Display**
- DataTables integration with:
  - Sorting by columns
  - Pagination
  - Search functionality
  - Responsive design
  - Color-coded badges for severity levels

### 12. **Notifications & Alerts**
- SweetAlert2 integration for:
  - Confirmation dialogs
  - Success messages
  - Info alerts
  - Warning dialogs
- Custom styling matching application theme

## File Structure

```
BTLogMonitor/
├── index.html          # Main HTML file with complete structure
├── styles.css          # Complete styling and responsive design
├── script.js           # JavaScript functionality and interactivity
└── ReadMe.MD           # Project documentation
```

## Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server-side installation required

### Steps
1. Clone or download the repository
2. Navigate to the BTLogMonitor folder
3. Open `index.html` in a web browser
4. No build process or dependencies to install (all libraries loaded via CDN)

## Usage Guide

### Navigation
- Click sidebar menu items to navigate between pages
- Use breadcrumbs to understand current location
- Profile dropdown for account actions

### Viewing Data
- **Dashboard**: Overview of system status and recent activity
- **Logs**: View and filter detailed log entries
- **Analytics**: Analyze trends and patterns
- **Monitoring**: Monitor real-time system metrics
- **Alerts**: View system alerts and notifications
- **Settings**: Configure application preferences

### Interactions
- Click "Export Logs" to export log data
- Use filter controls to refine log view
- Click charts to interact with visualizations
- Use quick action buttons for common tasks
- Toggle sidebar for more screen space

## Browser Compatibility

- Chrome/Chromium (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Auto-refresh data every 30 seconds
- Lazy-loaded charts that render on demand
- Responsive images and assets
- Optimized CSS animations
- Efficient JavaScript event handling
- Smooth transitions and interactions

## Responsive Design

- **Desktop (1200px+)**: Full layout with all features
- **Tablet (768px-1199px)**: Adjusted column widths
- **Mobile (<768px)**: Stacked layout with collapsible menu

## Future Enhancements

- Backend API integration for live data
- User authentication system
- Custom dashboard widgets
- Export to PDF/CSV functionality
- Real-time WebSocket updates
- Advanced log filtering
- User role-based access control
- Dark/Light theme toggle
- Notification center
- Log retention policies

## Credits

Developed with modern web technologies and best practices for user experience and performance.

## License

This project is licensed under the MIT License.


