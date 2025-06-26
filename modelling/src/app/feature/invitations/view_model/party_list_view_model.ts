import { PartyService } from "@/app/service";
import { Observable } from "../../observable";

export class PartyListViewModel extends Observable {
  constructor(private partyService: PartyService) {
    super();
  }

  private data: PartyViewModel[] = [];
  #loading = false;

  get loading() {
    return this.#loading;
  }

  async load() {
    try {
      this.#loading = true;
      this.update();

      const result = await this.partyService.list();
      this.data = result.data.map(
        (row) => new PartyViewModel(row.id, row.name)
      );
    } finally {
      this.#loading = false;
      this.update();
    }
  }
}

export class PartyViewModel extends Observable {
  #id: string;
  #name: string;

  constructor(id: string, name: string) {
    super();
    this.#id = id;
    this.#name = name;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }
}
