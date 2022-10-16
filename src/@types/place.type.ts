interface AccessibilityList {
  accessible: string;
  title: string;
  description: string;
}

export interface Place {
  accessibilityList: AccessibilityList[];
  accessible: 'yes' | 'no' | 'parcial';
  description: string;
  descriptionObs: string;
  images: any[];
  latitude: string;
  longitude: string;
  locality: string;
  thumb_image: string;
  title: string;
}
