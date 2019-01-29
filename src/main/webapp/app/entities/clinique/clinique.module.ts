import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GestionCliniqueSharedModule } from 'app/shared';
import {
    CliniqueComponent,
    CliniqueDetailComponent,
    CliniqueUpdateComponent,
    CliniqueDeletePopupComponent,
    CliniqueDeleteDialogComponent,
    cliniqueRoute,
    cliniquePopupRoute
} from './';

const ENTITY_STATES = [...cliniqueRoute, ...cliniquePopupRoute];

@NgModule({
    imports: [GestionCliniqueSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        CliniqueComponent,
        CliniqueDetailComponent,
        CliniqueUpdateComponent,
        CliniqueDeleteDialogComponent,
        CliniqueDeletePopupComponent
    ],
    entryComponents: [CliniqueComponent, CliniqueUpdateComponent, CliniqueDeleteDialogComponent, CliniqueDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GestionCliniqueCliniqueModule {}
