from pydantic import BaseModel
from typing import List
from datetime import date

class EmployeeBase(BaseModel):
    firstName: str
    lastName: str
    email: str
    mobile: str
    dob: date
    gender: str
    address: str
    country: str
    city: str
    skills: List[str]

class EmployeeCreate(EmployeeBase):
    pass

class EmployeeUpdate(EmployeeBase):
    pass

class EmployeeResponse(BaseModel):
    id: int
    first_name: str
    last_name: str
    email: str
    mobile: str
    dob: date
    gender: str
    address: str
    country: str
    city: str
    skills: str

    class Config:
        orm_mode = True