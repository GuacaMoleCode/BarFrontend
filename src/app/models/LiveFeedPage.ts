import { Local } from 'protractor/built/driverProviders';

export class LiveFeedPage {
    Description: string;
    Title: string;
    Subtitle: string;
    Subtext: string;
    BackgroundImage: BackgroundImage;
    createdAt: string;
    id: number;
    updatedAt: string;
}

export class BackgroundImage {
    id: number;
    name: string;
    hash: string;
    sha256: string;
    ext: string;
    mime: string;
    provider: Local;
    providerMetadata: any;
    size: string;
    url: string;
}
