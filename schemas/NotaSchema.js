export default class NoteSchema {
    static schema = {
        name: 'nota',
        primaryKey: 'title',
        properties: {
            title: 'string',
            description: 'string'
        }
    }
}