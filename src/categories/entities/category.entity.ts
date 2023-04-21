interface CategoryProps {
  active: boolean;
  name: string;
  description: string;
  slug: string;
}

export class Category {
  private props: CategoryProps;

  get active() {
    return this.props.active;
  }

  get name() {
    return this.props.name;
  }

  get description() {
    return this.props.active;
  }

  get slug() {
    return this.props.slug;
  }

  constructor(props: CategoryProps) {
    this.props = props;
  }
}
