from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title='eMandi Voice Assistant Service')

class VoiceCommand(BaseModel):
    text: str
    language: str = 'en'

@app.get('/health')
def health():
    return {'ok': True, 'service': 'voice_assistant'}

@app.post('/interpret')
def interpret_command(payload: VoiceCommand):
    text = payload.text.lower()
    if 'tomato price' in text or 'टमाटर' in text or 'टोमॅटो' in text:
        return {'intent': 'price_lookup', 'crop': 'tomato', 'action': 'show_market_price'}
    if 'upload' in text or 'अपलोड' in text:
        return {'intent': 'crop_upload', 'action': 'open_crop_form'}
    return {'intent': 'fallback', 'action': 'connect_human_support'}
