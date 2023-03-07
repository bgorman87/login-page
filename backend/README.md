## Backend

1. Make sure you have python3 installed   
2. Ensure in backend folder - `cd login-page/backend`  
3. Create venv if desired - `python -m venv venv` or `python3 -m venv venv`  
 3.1 If created use `source venv/bin/activate` on linux  
4. Install required packages - `pip install -r requirements.txt`
5. Get database schema up to date - `python manage.py migrate`
6. Create a user to login - `python manage.py createsuperuser  `
7. Start the development server - `python manage.py runserver`