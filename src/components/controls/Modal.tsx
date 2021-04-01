import { Component, Prop } from 'vue-property-decorator';
import BaseControl from './BaseControl';
@Component
export default class Modal extends BaseControl {
    @Prop(String) readonly modalDialogClassName?: string;
    element: any;
    constructor() {
        super();
        this.setControlId(this.constructor.name);
    }
    mounted() {
        this.element = this.jQuery('#' + this.eleId);
        this.cmpSettings = this.settings || {};
    }
    setOption(options: { [key: string]: string }) {
        this.element.modal(this.cmpSettings)
    }
    show() {
        this.element.modal('show');
    }
    hide() {
        this.element.modal('hide');
    }
    toggle() {
        this.element.modal('toggle');
    }
    call(methodName: string) {
        this.element.modal(methodName);
    }
    on(eventName: string, callback: Function) {
        this.element.on(eventName, (event: any) => callback(event));
    }
    render() {
        return (
            <div id={this.eleId} class={'modal ' + (this.className || '')} tabindex="-1">
                <div class={'modal-dialog ' + (this.modalDialogClassName || '')}>
                    <div class="modal-content">
                        <div class="modal-header">
                            {
                                (this.$scopedSlots as any).header ? (this.$scopedSlots as any).header() : null
                            }
                        </div>
                        <div class="modal-body">
                            {
                                (this.$scopedSlots as any).body ? (this.$scopedSlots as any).body() : null
                            }
                        </div>
                        <div class="modal-footer">
                            {
                                (this.$scopedSlots as any).footer ? (this.$scopedSlots as any).footer() : null
                            }
                        </div>
                    </div>
                </div>
            </div>
            // <div>
            //     <div id={this.eleId} class={'ui modal ' + (this.className || '')}>
            //         <i class="close icon"></i>
            //         <div class="header">
            //             {
            //                 (this.$scopedSlots as any).header ? (this.$scopedSlots as any).header() : null
            //             }
            //         </div>
            //         <div class="content">
            //             {
            //                 (this.$scopedSlots as any).content ? (this.$scopedSlots as any).content() : null
            //             }
            //         </div>
            //         <div class="actions">
            //             {
            //                 (this.$scopedSlots as any).actions ? (this.$scopedSlots as any).actions() : null
            //             }
            //         </div>
            //     </div>
            // </div>
        );
    }
}
