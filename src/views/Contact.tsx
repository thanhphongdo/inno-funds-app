import { Vue, Component } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';
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
export default class Contact extends Vue {
  message?: string;
  modal!: Modal;
  changeMessage!: ChangeMessageFn;

  render() {
    return (
      <div>
        <div>{this.message} Contact Page</div>
        <button on-click={() => this.modal.show()}>open</button>
        <button on-click={async () => {
          console.log('start:');
          await this.changeMessage(this.message + ' 1');
          console.log('changed');
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
