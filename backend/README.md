## Backend

1. Ensure in backend folder "cd login-page/backend"
2. Create venv if desired (python -m venv venv or python3 -m venv venv)  
 2.1 If created use "source venv/bin/activate" on linux  
3. pip install -r requirements.txt
4. python manage.py migrate
4. python manage.py createsuperuser  
5. python manage.py runserver