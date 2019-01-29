import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'clinique',
                loadChildren: './clinique/clinique.module#GestionCliniqueCliniqueModule'
            },
            {
                path: 'specialite',
                loadChildren: './specialite/specialite.module#GestionCliniqueSpecialiteModule'
            },
            {
                path: 'medecin',
                loadChildren: './medecin/medecin.module#GestionCliniqueMedecinModule'
            },
            {
                path: 'patient',
                loadChildren: './patient/patient.module#GestionCliniquePatientModule'
            },
            {
                path: 'visite',
                loadChildren: './visite/visite.module#GestionCliniqueVisiteModule'
            },
            {
                path: 'compte-rendu',
                loadChildren: './compte-rendu/compte-rendu.module#GestionCliniqueCompteRenduModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GestionCliniqueEntityModule {}
