import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  render() {
    return (
      <div>
        <div>This is Home</div>
      </div>
    );
  }
}
