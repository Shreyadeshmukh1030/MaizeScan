import shutil
import os
from pathlib import Path

def finalize_model():
    # Use the generalized model run
    source = Path(r"c:\Users\HP\OneDrive\Desktop\Maize Scan\runs\detect\maizescan_generalized\weights\best.pt")
    destination = Path(r"c:\Users\HP\OneDrive\Desktop\Maize Scan\backend\seed_model.pt")
    
    if source.exists():
        shutil.copy(source, destination)
        print(f"Success! Generalization model updated at {destination}")
    else:
        print(f"Error: Could not find trained model at {source}")

if __name__ == "__main__":
    finalize_model()
