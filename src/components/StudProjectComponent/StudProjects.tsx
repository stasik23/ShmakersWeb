import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import styles from './studstyles.module.css';
import { IoLogoFigma } from 'react-icons/io5';

interface Project {
    id: number;
    name: string;
    description: string;
    category: string;
    tags: string[];
    image: string;
    avatar: string;
    githubUrl?: string;
    liveUrl?: string;
    detailDescription: string;
}

const projectsData: Project[] = [
    {
        id: 1,
        name: 'Formify',
        description: 'Default Description of The Project',
        category: 'Web Design',
        tags: ['Web Design', 'Front-End'],
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        githubUrl: 'https://github.com',
        liveUrl: 'https://formify.com',
        detailDescription: 'Formify — це гнучкий вебконструктор форм, який дозволяє швидко створювати інтерактивні форми без глибоких знань програмування. Підтримується валідація полів, автозбереження даних, інтеграція з API та адаптивний дизайн. Користувачі можуть проектувати контактні форми, опитування чи реєстрації.'
    },
    {
        id: 2,
        name: 'PixelNest',
        description: 'Проект, зосереджений на чистому дизайні',
        category: 'Web Development',
        tags: ['React', 'TypeScript'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        githubUrl: 'https://github.com',
        detailDescription: 'PixelNest - це платформа для дизайнерів та розробників, яка дозволяє створювати та ділитися високоякісними дизайнами.'
    },
    {
        id: 3,
        name: 'BrightFrame',
        description: 'Яскравий лендінг або галерея проектів',
        category: 'Web Design',
        tags: ['UI/UX', 'Design'],
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        liveUrl: 'https://brightframe.com',
        detailDescription: 'BrightFrame - це сучасна галерея проектів з інтуїтивним інтерфейсом та адаптивним дизайном.'
    },
    {
        id: 4,
        name: 'NovoSite',
        description: 'Універсальний вебсайт-стартап',
        category: 'Web Development',
        tags: ['Next.js', 'Full-Stack'],
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        githubUrl: 'https://github.com',
        liveUrl: 'https://novosite.com',
        detailDescription: 'NovoSite - це універсальна платформа для створення стартапів з готовими шаблонами та компонентами.'
    },
    {
        id: 5,
        name: 'UIForge',
        description: 'Навчальний проект, що демонструє можливості',
        category: 'Game Development',
        tags: ['Unity', 'C#'],
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        githubUrl: 'https://github.com',
        detailDescription: 'UIForge - це набір інструментів для створення інтерфейсів в Unity з готовими компонентами.'
    },
    {
        id: 6,
        name: 'FlowMatter',
        description: 'Інтерфейс з продуманими UX, оптимізований',
        category: 'Math',
        tags: ['Python', 'Data Science'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        liveUrl: 'https://flowmatter.com',
        detailDescription: 'FlowMatter - це аналітична платформа для обробки та візуалізації математичних даних.'
    },
    {
        id: 7,
        name: 'GlowHub',
        description: 'Сайт з ефектною анімацією та дизайном',
        category: 'Embedded',
        tags: ['Arduino', 'IoT'],
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        githubUrl: 'https://github.com',
        detailDescription: 'GlowHub - це система розумного освітлення на базі Arduino з веб-інтерфейсом управління.'
    },
    {
        id: 8,
        name: 'TypeCraft',
        description: 'Проект, де основний акцент зроблено на типографіці',
        category: 'English',
        tags: ['Education', 'Language'],
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        liveUrl: 'https://typecraft.com',
        detailDescription: 'TypeCraft - це інтерактивна платформа для вивчення англійської мови з акцентом на типографіку.'
    }
];

const categories = ['Web Design', 'Web Development', 'Game Development', 'Math', 'Embedded', 'English', 'French'];

export const StudentProjects = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project>(projectsData[0]);
    const [showDetails, setShowDetails] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Проверяем размер экрана при загрузке и изменении
    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 440);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const filteredProjects = selectedCategories.length === 0
        ? projectsData
        : projectsData.filter(project => selectedCategories.includes(project.category));

    const handleProjectSelect = (project: Project) => {
        setSelectedProject(project);
        setShowDetails(true);
    };

    const handleBackToList = () => {
        setShowDetails(false);
    };

    const handleCategoryToggle = (category: string) => {
        setSelectedCategories(prev => {
            if (prev.includes(category)) {
                return prev.filter(cat => cat !== category);
            } else {
                return [...prev, category];
            }
        });
    };

    const clearAllCategories = () => {
        setSelectedCategories([]);
    };

    return (
        <div className={styles.container}>
            <motion.h1 
                className={styles.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                ПРОЄКТИ НАШИХ УЧНІВ
            </motion.h1>
            <div className={styles.secContainer}>
                {isMobile ? (
                    !showDetails ? (
                        <>
                            <div className={styles.categoriesContainer}>
                                <div className={styles.categories}>
                                    <motion.button
                                        onClick={clearAllCategories}
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                                    >
                                    </motion.button>
                                    {categories.map((category, index) => (
                                        <motion.button
                                            key={category}
                                            className={`${styles.categoryBtn} ${selectedCategories.includes(category) ? styles.active : ''}`}
                                            onClick={() => handleCategoryToggle(category)}
                                            initial={{ opacity: 0, x: -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{ 
                                                duration: 0.4, 
                                                delay: 1.1 + (index * 0.1), 
                                                ease: "easeOut" 
                                            }}
                                        >
                                            {category}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            <motion.div 
                                className={styles.projectsLayout}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
                            >
                                <div className={styles.projectsList}>
                                    {filteredProjects.length > 0 ? (
                                        filteredProjects.map(project => (
                                            <div
                                                key={project.id}
                                                className={`${styles.projectCard} ${selectedProject.id === project.id ? styles.selected : ''}`}
                                                onClick={() => handleProjectSelect(project)}
                                            >
                                                <img src={project.avatar} alt={`${project.name} avatar`} className={styles.avatar} />
                                                <div className={styles.projectInfo}>
                                                    <h3 className={styles.projectName}>{project.name}</h3>
                                                    <p className={styles.projectDescription}>{project.description}</p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className={styles.noProjects}>
                                            <p>Проекти за вибраними категоріями не знайдено</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </>
                    ) : (
                        /* На мобильных устройствах показываем только детали проекта на всю карточку */
                        <div className={styles.projectDetails}>
                            <div className={styles.detailsHeader}>
                                <div className={styles.headerContainer}>
                                    <FaArrowLeft 
                                        className={styles.backArrow} 
                                        onClick={handleBackToList}
                                        style={{ cursor: 'pointer' }}
                                    />
                                    <span className={styles.projectTitle}>{selectedProject.name}</span>
                                </div>
                            </div>

                            <div className={styles.projectPreview}>
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.name}
                                    className={styles.previewImage}
                                />
                            </div>

                            <div className={styles.linksAndTagsSection}>
                                <div className={styles.projectLinks}>
                                    {selectedProject.githubUrl && (
                                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                            <FaGithub className={styles.linkIcon} />
                                        </a>
                                    )}
                                    {selectedProject.liveUrl && (
                                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                            <IoLogoFigma className={styles.linkIcon} />
                                        </a>
                                    )}
                                </div>
                                <div className={styles.projectTags}>
                                    {selectedProject.tags.map(tag => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.projectDescription}>
                                <p>{selectedProject.detailDescription}</p>
                            </div>
                        </div>
                    )
                ) : (
                    /* На десктопе показываем как было изначально - категории, список и детали одновременно */
                    <>
                        <div className={styles.categoriesContainer}>
                            <div className={styles.categories}>
                                {categories.map((category, index) => (
                                    <motion.button
                                        key={category}
                                        className={`${styles.categoryBtn} ${selectedCategories.includes(category) ? styles.active : ''}`}
                                        onClick={() => handleCategoryToggle(category)}
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ 
                                            duration: 0.4, 
                                            delay: 1.1 + (index * 0.1), 
                                            ease: "easeOut" 
                                        }}
                                    >
                                        {category}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        <motion.div 
                            className={styles.projectsLayout}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
                        >
                            <div className={styles.projectsList}>
                                {filteredProjects.length > 0 ? (
                                    filteredProjects.map(project => (
                                        <div
                                            key={project.id}
                                            className={`${styles.projectCard} ${selectedProject.id === project.id ? styles.selected : ''}`}
                                            onClick={() => handleProjectSelect(project)}
                                        >
                                            <img src={project.avatar} alt={`${project.name} avatar`} className={styles.avatar} />
                                            <div className={styles.projectInfo}>
                                                <h3 className={styles.projectName}>{project.name}</h3>
                                                <p className={styles.projectDescription}>{project.description}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className={styles.noProjects}>
                                        <p>Проекти за вибраними категоріями не знайдено</p>
                                    </div>
                                )}
                            </div>

                            <div className={styles.projectDetails}>
                                <div className={styles.detailsHeader}>
                                    <h2 className={styles.detailsTitle}>{selectedProject.name}</h2>
                                    <div className={styles.projectTags}>
                                        {selectedProject.tags.map(tag => (
                                            <span key={tag} className={styles.tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.projectPreview}>
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.name}
                                        className={styles.previewImage}
                                    />
                                    <div className={styles.projectLinks}>
                                        {selectedProject.githubUrl && (
                                            <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                                <FaGithub className={styles.fagithub} />
                                            </a>
                                        )}
                                        {selectedProject.liveUrl && (
                                            <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                                <IoLogoFigma className={styles.fafigma} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className={styles.projectDescription}>
                                    <p>{selectedProject.detailDescription}</p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </div>

        </div>
    );
};