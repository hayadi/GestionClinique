import { NgModule } from '@angular/core';

import { GestionCliniqueSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GestionCliniqueSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GestionCliniqueSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GestionCliniqueSharedCommonModule {}
