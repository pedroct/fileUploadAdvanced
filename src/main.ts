import { bootstrapApplication } from '@angular/platform-browser';
    import { FileUploadAdvancedDemo } from './app/file-upload-advanced-demo';
    import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

    bootstrapApplication(FileUploadAdvancedDemo, {
    providers: [provideAnimationsAsync()],
    }).catch((err) => console.error(err));