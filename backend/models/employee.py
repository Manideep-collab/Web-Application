from sqlalchemy import Column, Integer, String, Date, Text
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class Employee(Base):
    __tablename__ = "employees"

    id = Column(Integer, primary_key=True, index=True)

    first_name = Column(String(100))
    last_name = Column(String(100))
    email = Column(String(100))
    mobile = Column(String(20))
    dob = Column(Date)
    gender = Column(String(10))
    address = Column(Text)
    country = Column(String(50))
    city = Column(String(50))
    skills = Column(Text)