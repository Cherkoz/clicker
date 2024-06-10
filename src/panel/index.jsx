import './style.css';

export function Panel() {
  return (
    <div className={'panel'}>
      <div className={'panel__btn'}>
        <div>
          <p>Boots</p>
          <p>(soon)</p>
        </div>
      </div>
      <div className={'panel__btn'}>
        <div>
          <p>Task</p>
          <p>(soon)</p>
        </div>
      </div>
      <div className={'panel__btn'}>
        <div>
          <p>Ref</p>
          <p>(soon)</p>
        </div>
      </div>
    </div>
  );
}
