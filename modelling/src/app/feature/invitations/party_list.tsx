"use client";

import { FC, useCallback, useEffect, useMemo, useState } from "react";

import { InvitationHttpService, PartyHttpService } from "@/app/service";

export const PartyList: FC = () => {
  const { party } = useMemo(
    () => ({
      invitation: new InvitationHttpService(),
      party: new PartyHttpService(),
    }),
    []
  );

  const [list, setList] = useState<{ id: string; name: string }[]>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      const result = await party.list();
      setList(result.data);
    })();
  }, [party]);

  const createParty = useCallback(async () => {
    const id = await party.createParty(name);
    setName("");
    setList([...list, { id, name }]);
  }, [list, name, party]);

  return (
    <div>
      <div>
        <div>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <button onClick={createParty}>Create</button>
        </div>
      </div>
      <ul>
        {list.map(({ id, name }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
};
