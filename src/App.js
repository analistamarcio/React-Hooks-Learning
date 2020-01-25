import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [tech, setTech] = useState(['ReactJS', 'React Native']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  /**
   * useEffect(function, when)
   *   function: () => {}
   *   when: [] -> dependencies array
   */
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>You have {techSize} technologies.</strong>
      <br />
      <input
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
        onKeyDown={k => (k.keyCode === 13 ? handleAdd() : null)}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
