import Dexie from 'dexie';

const storage = new Dexie('Dronzi')

storage.version(2).stores({
    allDrons:'',
    selectedDrons:'',
    test:'++id,data'
})

export default storage