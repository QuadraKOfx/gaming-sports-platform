import db from '../db/firestore';

const extractSnapshotData = snapshot =>
    snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))

export const fetchPosts = () => {
    return db
        .collection('posts')
        .get()
        .then(extractSnapshotData)
}

export const postComment = (comment, postId) =>
    db
        .collection('posts')
        .doc(postId)
        .collection('comments')
        .doc(comment.timestamp)
        .set(comment)

export const deleteComment = (comment, postId) =>
    db
        .collection('posts')
        .doc(postId)
        .collection('comments')
        .doc(comment.id)
        .delete()

export const subscribeToPostComments = (postId, onSubscribe) =>
    db
        .collection('posts')
        .doc(postId)
        .collection('comments')
        .onSnapshot(snapshot => onSubscribe(snapshot.docChanges()))


