import { Vue, Component } from 'vue-property-decorator';
import Modal from '../components/controls/Modal';

@Component({
  components: {
    Modal
  }
})
export default class Home extends Vue {
  message?: string;
  modal!: Modal;

  render() {
    this.message = 'hihi';
    return (
      <div>
        <div>This is Home</div>
        <button on-click={() => this.modal.show()}>open</button>
        <Modal on-addRef={(modal: Modal) => { this.modal = modal }} {...{
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
