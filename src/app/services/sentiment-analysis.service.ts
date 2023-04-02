import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SentimentResponse } from '../models/sentimentResponse.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {
  private apiUrl = 'http://localhost:5000/analyze';

  constructor(private http: HttpClient) {}

  getSentimentLabel(label: string): string {
    switch (label) {
        case 'LABEL_0':
            return 'negative';
        case 'LABEL_1':
            return 'neutral';
        case 'LABEL_2':
            return 'positive';
        default:
            return 'unknown';
    }
  }

  analyzeSentiment(text: string): Observable<SentimentResponse> {
    const requestBody = {text: text};
    return this.http.post<any>(this.apiUrl, requestBody).pipe(
      map(res => {
        return {
          label: res.label,
          confidence: res.score,
          sentiment: this.getSentimentLabel(res.sentiment)
        }
      })
    );
    
  }
}

