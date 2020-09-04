import Realm from 'realm'

import NotaSchema from '../schemas/NotaSchema'

export default function getRealm() {
    return Realm.open({
        schema: [NotaSchema],
    })
}