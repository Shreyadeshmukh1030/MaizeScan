import os
import random
from datetime import datetime, timedelta
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base, Batch, User, Organization
from dotenv import load_dotenv

# Load env
backend_dir = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(backend_dir, ".env"))

DATABASE_URL = os.getenv("DATABASE_URL")
if not DATABASE_URL:
    DATABASE_URL = "sqlite:///./seed_insight.db"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)
db = SessionLocal()

def seed_geo_data():
    print("🌍 Seeding geospatial data for Map and Heatmap...")
    
    # Get or create a default user
    user = db.query(User).first()
    if not user:
        print("Creating default operator...")
        user = User(email="admin@maizescan.ai", full_name="System Auditor", role="Admin")
        db.add(user)
        db.commit()

    # Define some coordinates around a harvest region (e.g. Near Nagpur/Amravati, India)
    # Latitude: 18 to 22
    # Longitude: 75 to 80
    
    varieties = ["Sweet Corn", "Field Corn", "Yellow Flint", "White Dent"]
    grades = ["A", "B", "C"]
    classes = ["Excellent", "Good", "Average", "Bad", "Worst"]

    # Generate 50 batches
    for i in range(50):
        lat = random.uniform(18.5, 21.5)
        lng = random.uniform(75.5, 79.5)
        
        total = random.randint(100, 500)
        exc = int(total * random.uniform(0.1, 0.6))
        good = int(total * random.uniform(0.1, 0.3))
        avg = int(total * random.uniform(0.05, 0.2))
        bad = int(total * random.uniform(0.02, 0.1))
        worst = total - (exc + good + avg + bad)
        
        batch = Batch(
            batch_id=f"GEO-BH-{2024}-{i+1:03d}",
            timestamp=datetime.utcnow() - timedelta(days=random.randint(0, 30)),
            owner_id=user.id,
            total_count=total,
            excellent_count=exc,
            good_count=good,
            average_count=avg,
            bad_count=bad,
            worst_count=worst,
            excellent_percentage=(exc/total)*100,
            good_percentage=(good/total)*100,
            average_percentage=(avg/total)*100,
            bad_percentage=(bad/total)*100,
            worst_percentage=(worst/total)*100,
            final_grade=random.choice(grades),
            recommendation="Certified for Market" if random.random() > 0.2 else "Review Required",
            latitude=lat,
            longitude=lng,
            moisture_content=random.uniform(10.5, 14.5),
            seed_variety=random.choice(varieties)
        )
        db.add(batch)
    
    db.commit()
    print(f"✅ Successfully seeded 50 geospatial batches to {DATABASE_URL}")

if __name__ == "__main__":
    seed_geo_data()
