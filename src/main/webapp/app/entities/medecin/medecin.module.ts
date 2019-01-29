import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GestionCliniqueSharedModule } from 'app/shared';
import {
    MedecinComponent,
    MedecinDetailComponent,
    MedecinUpdateComponent,
    MedecinDeletePopupComponent,
    MedecinDeleteDialogComponent,
    medecinRoute,
    medecinPopupRoute
} from './';

const ENTITY_STATES = [...medecinRoute, ...medecinPopupRoute];

@NgModule({
    imports: [GestionCliniqueSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        MedecinComponent,
        MedecinDetailComponent,
        MedecinUpdateComponent,
        MedecinDeleteDialogComponent,
        MedecinDeletePopupComponent
    ],
    entryComponents: [MedecinComponent, MedecinUpdateComponent, MedecinDeleteDialogComponent, MedecinDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GestionCliniqueMedecinModule {}
