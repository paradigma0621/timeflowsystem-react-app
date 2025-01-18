# Changelog

## 2024-11-02 (Final Version Utilizing Browser Cookies)
### Commit bd4df09 (Add Logout Functionality)
- Add logout functionality by accessing the backend Security microservice endpoint `/logout` to properly terminate the session of a previously logged-in account. Session cookies are cleared upon logout, enforcing a secure logout process.

## 2024-10-28
### Commit 5efccdd (Add UserAccount data models. Add authentication validation accessing Security microservice)
- Add IUserAccount and IUserAccountLoginData interfaces
- Add authentication validation accessing `/backendLoginEndpoint` endpoint from the Security microservice

## 2024-09-21
### Commit 703a94d (Added Clocking instance saving support)
- Implement a POST method using an HTML form to save Clocking records into the database

## 2024-09-21
### Commit f09caa2 (Added styles using className)
- Apply `className` attributes to HTML elements for styling
- Add corresponding CSS style files

## 2024-08-31
### Commit bf73816 (Updated GET and POST methods of Entity Person)
- Add GET and POST methods for the Person data model, following a structured pattern with React Query 5
- Add POST method using an HTML form to persist Person records in the database

## 2024-08-18
### Commit 74a1bce (Added Router/Routes/Route implementation. Now the site has a left menu)
- Add left menu for easier site navigation.

## 2024-08-02
### Commit a49e8df (Structured the project)
- Update React Query version to 5.4
- Add suport files for React Query requests

## 2024-05-25
### Commit 90cfff9 (GET request of List<PersonDto> with display in table)
- Add a GET request to retrieve a list of `PersonDto` from the backend and display it in a table (using the `IPerson` interface)

## 2024-05-25
### Commit 03a5a69 (Working GET requisition)
- Add a GET request to retrieve a simple `String` response from a backend endpoint

## 2024-05-19
### Commit f8aeb5a (Initialize project using Create React App)
- Repository creation
