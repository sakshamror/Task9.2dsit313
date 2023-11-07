// Import necessary libraries
import React, { useState, useEffect } from 'react';
import './FindQuestion.css'
import { firestoreDb } from './firebase';
import { onSnapshot, collection, addDoc, deleteDoc, doc } from 'firebase/firestore';

function App() {
    const [cards, setCards] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('');
    const [code,setCode]=useState('');
    const [expandedCardId, setExpandedCardId] = useState(null);
    const [titleFilter, setTitleFilter] = useState('');
    const [tagFilter, setTagFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');

    useEffect(() => {
        // Fetch cards from Firestore
        const unsubscribe = onSnapshot(collection(firestoreDb, 'cards'), (snapshot) => {
            const updatedCards = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setCards(updatedCards);
        });

        return () => unsubscribe();
    }, []);

    const addCard = async () => {
        try {
            await addDoc(collection(firestoreDb, 'cards'), {
                title,
                description,
                tag,
                code,
                date: new Date()
            });

            // Clear input fields
            setTitle('');
            setDescription('');
            setCode('');
            setTag('');
        } catch (error) {
            console.error('Error adding card: ', error);
        }
    };
    const deleteCard = async (cardId) => {
        try {
            await deleteDoc(doc(firestoreDb, 'cards', cardId));
            
            setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
        } catch (error) {
            console.error('Error deleting card: ', error);
        }
    };
    const toggleCard = (cardId) => {
        setExpandedCardId((prevId) => (prevId === cardId ? null : cardId));
    };

    return (
        <div className="App">
            <h1>Questions List</h1>
           
            <div className="card-form">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Tag"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                />
                <button onClick={addCard}>Add Card</button>
            </div>
            <div className="filter">
                {/* Input fields for filtering */}
                <input
                    type="text"
                    placeholder="Filter by title"
                    value={titleFilter}
                    onChange={(e) => setTitleFilter(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Filter by tag"
                    value={tagFilter}
                    onChange={(e) => setTagFilter(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="Filter by date"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                />
            </div>
            <div className="card-list">
                {cards
                    .filter((card) =>
                        card.title.toLowerCase().includes(titleFilter.toLowerCase()) &&card.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
                       
                        (dateFilter
                            ? card.date.toDate().toLocaleDateString() === new Date(dateFilter).toLocaleDateString()
                            : true)
                    )
                    .map((card) => (
                        <div key={card.id} className={`card ${expandedCardId === card.id ? 'expanded' : ''}`}>
                            <h2 onClick={() => toggleCard(card.id)}>{card.title}</h2>
                            {expandedCardId === card.id && (
                                <>
                                    <p>{card.description}</p>
                                   
                                    <p>Code: {card.code}</p>
                                    <p>Tag: {card.tag}</p>
                                    <button onClick={() => deleteCard(card.id)}>Delete</button>
                                </>
                            )}
                        </div>
                    ))}
            </div>


        </div>
    );
}

export default App;