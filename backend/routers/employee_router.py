from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from models.employee import Employee
from schemas.employee_schema import EmployeeCreate, EmployeeUpdate

router = APIRouter(prefix="/employees", tags=["Employees"])

# DB Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ✅ CREATE EMPLOYEE
@router.post("/")
def create_employee(emp: EmployeeCreate, db: Session = Depends(get_db)):
    new_emp = Employee(
        first_name=emp.firstName,
        last_name=emp.lastName,
        email=emp.email,
        mobile=emp.mobile,
        dob=emp.dob,
        gender=emp.gender,
        address=emp.address,
        country=emp.country,
        city=emp.city,
        skills=",".join(emp.skills)
    )

    db.add(new_emp)
    db.commit()

    return {"message": "Employee created"}


# ✅ GET ALL EMPLOYEES
@router.get("/")
def get_employees(db: Session = Depends(get_db)):
    employees = db.query(Employee).all()
    return employees


# ✅ DELETE EMPLOYEE
@router.delete("/{id}")
def delete_employee(id: int, db: Session = Depends(get_db)):
    emp = db.query(Employee).filter(Employee.id == id).first()

    if not emp:
        return {"error": "Employee not found"}

    db.delete(emp)
    db.commit()

    return {"message": "Deleted successfully"}


# ✅ UPDATE EMPLOYEE
@router.put("/{id}")
def update_employee(id: int, emp: EmployeeUpdate, db: Session = Depends(get_db)):
    existing = db.query(Employee).filter(Employee.id == id).first()

    if not existing:
        return {"error": "Employee not found"}

    existing.first_name = emp.firstName
    existing.last_name = emp.lastName
    existing.email = emp.email
    existing.mobile = emp.mobile
    existing.dob = emp.dob
    existing.gender = emp.gender
    existing.address = emp.address
    existing.country = emp.country
    existing.city = emp.city
    existing.skills = ",".join(emp.skills)

    db.commit()

    return {"message": "Updated successfully"}