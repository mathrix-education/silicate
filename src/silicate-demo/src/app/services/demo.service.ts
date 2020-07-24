import {Injectable} from '@angular/core';
import {Wall} from '@mathrix-education/silicate-core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  editable = true;
  data: Wall = [
    {
      kind: 'image',
      src: 'https://lh3.googleusercontent.com/DgFhLboMa3LPPmr_bSYAUd3IX9pj_0B04vRieUu0FgKoFJyUXsUyBZmSpb0Aq8Lhi73eB1iVbT44gO7ggg9TZ0xp041PhJNi4oFMo5PMRInxbVT05HTGMeb99uwDQAHN8KxU9NW8',
      alt: 'Du génome à la protéine Genome-fr.svg, domaine public, via Wikimédia Commons, modifié par Sandra Rivière https://upload.wikimedia.org/wikipedia/commons/3/38/Genome-fr.svg?uselang=fr',
      uuid: 'ee6afa01-af9d-42d4-bbdc-98e44c3d52ec',
      displayAlt: true,
    },
  ]
}
