import db from '../db/firestore';

const extractSnapshotData = snapshot =>
    snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))

export const fetchPosts = () => {
    return db
        .collection('posts')
        .get()
        .then(extractSnapshotData)
}
