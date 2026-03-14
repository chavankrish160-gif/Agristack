from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel

app = FastAPI(title='eMandi Disease Detection Service')

DISEASE_HINTS = {
    'early_blight': 'Use copper fungicide and improve air circulation.',
    'powdery_mildew': 'Apply sulfur-based spray and avoid overhead irrigation.',
    'healthy': 'No action needed. Keep standard nutrient management.'
}

class DiseaseResponse(BaseModel):
    disease: str
    confidence: float
    treatment: str

@app.get('/health')
def health():
    return {'ok': True, 'service': 'disease_detection'}

@app.post('/detect', response_model=DiseaseResponse)
async def detect_disease(image: UploadFile = File(...)):
    filename = image.filename.lower()
    if 'powder' in filename:
        label = 'powdery_mildew'
        confidence = 0.89
    elif 'healthy' in filename:
        label = 'healthy'
        confidence = 0.93
    else:
        label = 'early_blight'
        confidence = 0.86

    return DiseaseResponse(disease=label, confidence=confidence, treatment=DISEASE_HINTS[label])
