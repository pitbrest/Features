class Control<NodeType extends HTMLElement = HTMLElement> {
  public node: NodeType;

  constructor(parentNode: HTMLElement | null, tagName = 'div', className = '', content = '') {
    const el = document.createElement(tagName);
    el.className = className;
    el.innerHTML = content;
    if(parentNode) {
      parentNode.append(el);
    }
    this.node = el as NodeType;
  }

  destroy(): void {
    this.node.remove();
  }
}

class Signal<ListenerType> {
  private listeners: Array <(params: ListenerType) => void>;
  
  constructor() {
    this.listeners = [];
  }
 
  add(listener: (params: ListenerType) => void) {
    this.listeners.push(listener);
  }

  remove(listener: (params: ListenerType) => void) {
    this.listeners = this.listeners.filter((elem) => elem !== listener);
  }

  emit(params: ListenerType) {
    this.listeners.forEach((listener) => listener(params));
  }
}

export  {Control, Signal};
