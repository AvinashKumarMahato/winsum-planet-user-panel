import React, { useEffect, useState } from 'react';
import { FaBuilding} from 'react-icons/fa';
import { RiExternalLinkFill } from "react-icons/ri";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';

const Jobs = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);
    const [searchTerm, setSearchTerm] = useState('');

    const timeAgo = (date) => {
        const seconds = Math.floor((new Date() - new Date(date)) / 1000);
        let interval = Math.floor(seconds / 31536000);

        if (interval > 1) return `${interval} years ago`;
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) return `${interval} months ago`;
        interval = Math.floor(seconds / 86400);
        if (interval > 1) return `${interval} days ago`;
        interval = Math.floor(seconds / 3600);
        if (interval > 1) return `${interval} h ago`;
        interval = Math.floor(seconds / 60);
        if (interval > 1) return `${interval} min ago`;
        return `${seconds} sec ago`;
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/getPosts`);
                setPosts(response.data);
            } catch (err) {
                console.error('Error fetching posts:', err);
            }
        };

        fetchPosts();
    }, []);

    const filteredPosts = posts.filter((post) =>
        post.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) || post.companyName.toLowerCase().includes(searchTerm.toLowerCase()) || post.interviewAddress.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = filteredPosts.slice(firstPostIndex, lastPostIndex);


    return (
        <div className="max-w-lg mx-auto my-4">
            {/* Search input directly in LinkedInPostCard */}
            <input
                type="text"
                placeholder="Search by job title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />

            {currentPosts.map((post) => (
                <div key={post._id} className="bg-white shadow-lg rounded-lg p-4 mb-4">
                    <div className="flex items-center space-x-3">
                        <FaBuilding className="text-gray-500 w-12 h-12" />
                        <div>
                            <h2 className="text-base font-semibold">{post.jobTitle}</h2>
                            <p className="text-sm text-gray-500">{post.companyName}</p>
                            <p className="text-xs text-gray-400">{timeAgo(post.createdAt)} • 🌎</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm font-semibold text-gray-700">
                            Job Description:
                            <span className="font-normal">
                                <ul className="list-disc list-inside">
                                    {post.jobDescription.split('\n').map((line, index) => (
                                        <li key={index}>{line}</li>
                                    ))}
                                </ul>
                            </span>
                        </p>
                        <p className="text-sm font-semibold text-gray-700">
                            Interview Address: <span className="font-normal">{post.interviewAddress}</span>
                        </p>
                        <p className="text-sm font-semibold text-gray-700">
                            Interview Date: <span className="font-normal">{new Date(post.interviewDate).toLocaleDateString()}</span>
                        </p>
                        <p className="text-sm font-semibold text-gray-700">
                            Interview Start Time: <span className="font-normal">{new Date(post.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </p>
                        {post.endTime && (
                            <p className="text-sm font-semibold text-gray-700">
                                Interview End Time: <span className="font-normal">{new Date(post.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            </p>
                        )}
                        {post.contactPerson && (
                            <p className="text-sm font-semibold text-gray-700">
                                Contact Person:<span className="font-normal">{post.contactPerson}</span>
                            </p>
                        )}
                        {post.slotBookingLink && (
                            <Link
                            to={post.slotBookingLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center font-medium text-blue-600 hover:underline mt-4"
                        >
                            Book Your Slot
                            <RiExternalLinkFill to={post.slotBookingLink}
                            target="_blank"
                            rel="noopener noreferrer" className="ml-1 w-4 h-4 text-blue-600" />
                        </Link>
                        
                        )}
                    </div>
                </div>
            ))}
            <Pagination
                totalPosts={filteredPosts.length}
                postsPerPage={postsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage} // Ensure this matches the prop name in `Pagination`
            />
        </div>
    );
};

export default Jobs;
