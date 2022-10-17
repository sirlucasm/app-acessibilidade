interface AccessibilityList {
  accessible: 'yes' | 'no' | 'parcial';
  title: string;
  description: string;
}

export interface Place {
  accessibilityList: AccessibilityList[];
  accessible: 'yes' | 'no' | 'parcial';
  description: string;
  descriptionObs: string;
  images: any[];
  latitude: number;
  longitude: number;
  locality: string;
  thumb_image: string;
  title: string;
}
