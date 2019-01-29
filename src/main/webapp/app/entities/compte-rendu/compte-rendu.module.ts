import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GestionCliniqueSharedModule } from 'app/shared';
import {
    CompteRenduComponent,
    CompteRenduDetailComponent,
    CompteRenduUpdateComponent,
    CompteRenduDeletePopupComponent,
    CompteRenduDeleteDialogComponent,
    compteRenduRoute,
    compteRenduPopupRoute
} from './';

const ENTITY_STATES = [...compteRenduRoute, ...compteRenduPopupRoute];

@NgModule({
    imports: [GestionCliniqueSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        CompteRenduComponent,
        CompteRenduDetailComponent,
        CompteRenduUpdateComponent,
        CompteRenduDeleteDialogComponent,
        CompteRenduDeletePopupComponent
    ],
    entryComponents: [CompteRenduComponent, CompteRenduUpdateComponent, CompteRenduDeleteDialogComponent, CompteRenduDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GestionCliniqueCompteRenduModule {}
