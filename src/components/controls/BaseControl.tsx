import { Vue, Component, Prop } from 'vue-property-decorator';
import BaseComponent from '../BaseComponent';

@Component
export default class Modal extends BaseComponent {
    @Prop(String) readonly id?: string;
    @Prop(String) readonly className?: string;
    @Prop(Object) settings!: { [key: string]: any }
    cmpSettings!: { [key: string]: any }
    eleId!: string;
    constructor() {
        super();
    }

    set(settings: { [key: string]: any }) {
        this.cmpSettings = settings || {};
    }

    setControlId(controlName: string) {
        this.eleId = controlName.toLowerCase() + '-' + (this.id || new Date().getTime());
    }
}
