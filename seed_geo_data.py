import os
import random
from datetime import datetime, timedelta
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import sys

# Add backend to path to import models
sys.path.append(os.path.join(os.getcwd(), 'backend'))
import models

load_dotenv('backend/.env')
DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    print("DATABASE_URL not found in .env")
    sys.exit(1)

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def seed_data():
    db = SessionLocal()
    try:
        # Check if we have any batches
        count = db.query(models.Batch).count()
        print(f"Current batch count: {count}")
        
        # Regional centers for diversity (around Nagpur, Pune, Hyderabad, and Bhopal)
        centers = [
            (21.1458, 79.0882, "MH-NGP"), # Nagpur
            (18.5204, 73.8567, "MH-PNE"), # Pune
            (17.3850, 78.4867, "TS-HYD"), # Hyderabad
            (23.2599, 77.4126, "MP-BHO"), # Bhopal
            (26.8467, 80.9462, "UP-LKO")  # Lucknow
        ]
        
        grades = ["Excellent", "Good", "Average", "Bad", "Worst"]
        varieties = ["Standard Yellow", "Sweet Corn Hybrid", "Drought Resistant", "Bio-Fortified"]
        
        for i in range(15):
            center = random.choice(centers)
            lat = center[0] + random.uniform(-0.5, 0.5)
            lng = center[1] + random.uniform(-0.5, 0.5)
            
            grade = random.choice(grades)
            
            new_batch = models.Batch(
                batch_id=f"AGRI-{center[2]}-{random.randint(1000, 9999)}",
                timestamp=datetime.utcnow() - timedelta(days=random.randint(0, 30)),
                total_count=random.randint(50, 200),
                excellent_count=random.randint(0, 50),
                good_count=random.randint(0, 50),
                average_count=random.randint(0, 30),
                bad_count=random.randint(0, 20),
                worst_count=random.randint(0, 10),
                final_grade=grade,
                recommendation="Release for regional distribution" if grade in ["Excellent", "Good"] else "Hold for secondary processing",
                latitude=lat,
                longitude=lng,
                moisture_content=random.uniform(10.5, 14.5),
                seed_variety=random.choice(varieties)
            )
            
            # Calculate percentages for consistency
            total = new_batch.total_count
            new_batch.excellent_percentage = (new_batch.excellent_count / total) * 100
            new_batch.good_percentage = (new_batch.good_count / total) * 100
            new_batch.average_percentage = (new_batch.average_count / total) * 100
            new_batch.bad_percentage = (new_batch.bad_count / total) * 100
            new_batch.worst_percentage = (new_batch.worst_count / total) * 100
            
            db.add(new_batch)
            
        db.commit()
        print("Successfully seeded 15 new geo-tagged batches into NeonDB!")
        
    except Exception as e:
        print(f"Error seeding data: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    seed_data()
