import { Component } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';
import BaseComponent from '../components/BaseComponent';
import { ChangeMessageFn } from '../store/action.interface';
import Modal from '../components/controls/Modal';

@Component({
  components: {
    Modal
  },
  methods: {
    ...mapActions(['changeMessage'])
  },
  computed: {
    ...mapGetters(['message'])
  }
})
export default class Contact extends BaseComponent {
  message?: string;
  modal!: Modal;
  changeMessage!: ChangeMessageFn;

  render() {
    return (
      <div>
        <div>{this.message} Contact Page</div>
        <button on-click={() => this.modal.show()}>open</button>
        <button on-click={async () => {
          this.showLoading();
          console.log('start:');
          await this.changeMessage(this.message + ' 1');
          console.log('changed');
          this.hideLoading();
        }}>change message</button>
        <Modal on-addRef={(modal: Modal) => { this.modal = modal }} settings={{ duration: 1000 }} {...{
          scopedSlots: {
            header: () => {
              return (
                <div>Header</div>
              );
            },
            content: () => {
              return (
                <div>
                  Content
                </div>
              );
            },
            actions: () => {
              return (
                <div>
                  <div class="ui primary button">Yes</div>
                  <div class="ui cancel button" on-click={() => this.modal.hide()}>No</div>
                </div>
              );
            }
          }
        }}></Modal>
      </div>
    );
  }
}
