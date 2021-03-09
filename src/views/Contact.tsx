import { Component } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';
import { ChangeMessageFn } from '../store/action.interface';
import { Actions, Getters } from '../store/enums';
import BaseComponent from '../components/BaseComponent';
import Modal from '../components/controls/Modal';
import Accordion from '../components/controls/Accordion';
import { ParseBase } from '../utils/parse';

@Component({
  components: {
    Modal,
    Accordion
  },
  methods: {
    ...mapActions([Actions.changeMessage])
  },
  computed: {
    ...mapGetters([Getters.message])
  }
})
export default class Contact extends BaseComponent {
  [Getters.message]!: string;
  [Actions.changeMessage]!: ChangeMessageFn;
  modal!: Modal;

  async render() {
    console.log(process.env);
    const post = await ParseBase.runCloud('listPost', {
      page: 1,
      perPage: 10,
      text: '12345'
    });
    console.log(post);
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
        <div class="tw-pt-2">
          <Accordion className='styled fluid'>
            {
              [
                'Hello',
                'World'
              ].map((item, index) => {
                return [
                  <div class="title" id={'case-title-' + index}>
                    <i class="dropdown icon"></i>
                    <span>{item}</span>
                  </div>,
                  <div class="content" id={'case-content-' + index}>
                    Content {item}
                  </div>
                ];
              })
            }
          </Accordion>
        </div>
      </div>
    );
  }
}
