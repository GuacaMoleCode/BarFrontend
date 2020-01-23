import { Local } from 'protractor/built/driverProviders';

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