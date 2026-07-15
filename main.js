document.addEventListener('DOMContentLoaded', () => {
    
    /* --- Product Database for Quick View Modal --- */
    const productsDB = {
        'audio-1': {
            name: 'ZAVI Master ANC Pro',
            category: 'Audio Squad / ANC Earbuds',
            price: 299.00,
            stars: '★★★★★',
            img: 'assets/images/audio_buds.jpg',
            desc: 'Featuring ZAVI\'s proprietary Z1 neural audio processor. Our flagship earbud maps ear canal density 48,000 times per second to create active phase anti-waves. Precision forged titanium acoustic chambers housing hybrid 11mm dual-magnetic drivers.',
            colors: [
                { name: 'Electric Blue', value: '#0066ff', filter: 'none' },
                { name: 'Matte Gold', value: '#d4af37', filter: 'sepia(0.6) hue-rotate(5deg) saturate(1.8) brightness(1.05)' },
                { name: 'Titanium Silver', value: '#d2d2d7', filter: 'grayscale(1) brightness(1.2)' },
                { name: 'Space Black', value: '#1c1c1e', filter: 'grayscale(1) brightness(0.4)' }
            ],
            hasStorage: false
        },
        'audio-2': {
            name: 'ZAVI Nexus Gaming',
            category: 'Audio Squad / Gaming Earbuds',
            price: 229.00,
            stars: '★★★★★',
            img: 'assets/images/gaming_buds.jpg',
            desc: 'Engineered specifically for low-latency spatial coordinates. Backed by our proprietary 2.4GHz Z-Link protocol ensuring a locked 28ms audio-to-screen synchronization. Encased inside a heavy matte black housing with custom neon micro LED strips.',
            colors: [
                { name: 'Space Black', value: '#1c1c1e', filter: 'none' },
                { name: 'Electric Blue', value: '#0066ff', filter: 'hue-rotate(180deg) saturate(1.5)' }
            ],
            hasStorage: false
        },
        'audio-3': {
            name: 'ZAVI Studio Max',
            category: 'Audio Squad / Wireless Headphones',
            price: 449.00,
            stars: '★★★★★',
            img: 'assets/images/audio_buds.jpg',
            desc: 'Over-ear studio fidelity monitoring built from high-tensile carbon fiber grid bars and lightweight solid titanium brackets. Featuring ultra-low distortion custom 40mm transducers and 24-bit lossless streaming capabilities.',
            colors: [
                { name: 'Electric Blue', value: '#0066ff', filter: 'hue-rotate(180deg) brightness(0.95)' },
                { name: 'Space Black', value: '#1c1c1e', filter: 'grayscale(1) brightness(0.3)' }
            ],
            hasStorage: false
        },
        'wear-1': {
            name: 'ZAVI Chronos Titanium',
            category: 'Wearables / Luxury Smart Watches',
            price: 399.00,
            stars: '★★★★★',
            img: 'assets/images/smartwatch.jpg',
            desc: 'Forged titanium modular casing paired with custom high-contrast sapphire glass. Provides real-time dynamic cardiovascular metrics, blood oxygen pressure mapping, and ambient atmospheric telemetry. Up to 7 days of smart battery.',
            colors: [
                { name: 'Titanium White', value: '#f4f4f6', filter: 'none' },
                { name: 'Space Black', value: '#1c1c1e', filter: 'grayscale(1) brightness(0.4)' },
                { name: 'Luxury Gold', value: '#d4af37', filter: 'sepia(0.6) hue-rotate(5deg) saturate(2) brightness(0.95)' }
            ],
            hasStorage: false
        },
        'wear-2': {
            name: 'ZAVI Chronos Sport',
            category: 'Wearables / Fitness Watches',
            price: 299.00,
            stars: '★★★★☆',
            img: 'assets/images/smartwatch.jpg',
            desc: 'An ultra-lightweight structural polymer composite variant optimized for impact and sweat friction. Sapphire display interface detailing exercise analytics, running path mappings, and smart sleep tracking diagnostics.',
            colors: [
                { name: 'Titanium White', value: '#f4f4f6', filter: 'saturate(0.5) brightness(1.15)' },
                { name: 'Ocean Blue', value: '#0033aa', filter: 'hue-rotate(220deg) saturate(1.2) brightness(0.9)' }
            ],
            hasStorage: false
        },
        'charge-1': {
            name: 'ZAVI GaN 140W Core',
            category: 'Charging / GaN Fast Chargers',
            price: 89.00,
            stars: '★★★★★',
            img: 'assets/images/charger.jpg',
            desc: 'Gallium Nitride charging architecture delivering a concurrent 140 Watts across three smart-negotiating USB-C ports. Built-in thermal heat sinks ensuring running temperatures remain 15°C lower than standard silicon plugs.',
            colors: [
                { name: 'Matte White', value: '#ffffff', filter: 'none' },
                { name: 'Space Black', value: '#1c1c1e', filter: 'invert(0.9) brightness(0.35) contrast(1.2)' }
            ],
            hasStorage: false
        },
        'charge-2': {
            name: 'ZAVI Air Magnetic',
            category: 'Charging / Wireless Chargers',
            price: 69.00,
            stars: '★★★★★',
            img: 'assets/images/charger.jpg',
            desc: 'Sleek magnetic inductive pad utilizing high-density copper coils and brushed titanium backplates. Snaps instantly into vector alignments for optimal transmission speed, delivering up to 15W wireless current.',
            colors: [
                { name: 'Matte White', value: '#ffffff', filter: 'brightness(0.9) grayscale(0.25)' },
                { name: 'Space Black', value: '#1c1c1e', filter: 'invert(1) brightness(0.25)' }
            ],
            hasStorage: false
        },
        'store-1': {
            name: 'ZAVI Nexus SSD 2TB',
            category: 'Storage / Portable SSD',
            price: 179.00,
            stars: '★★★★★',
            img: 'assets/images/ssd.jpg',
            desc: 'Professional-grade storage solid-state-drive providing writing speeds up to 2000MB/s. Built with an internal structural aluminum honeycomb lattice, making it completely drop-proof and water-resistant (IP67 certified).',
            colors: [
                { name: 'Titanium White', value: '#ffffff', filter: 'none' },
                { name: 'Matte Gold', value: '#d4af37', filter: 'sepia(0.5) hue-rotate(15deg) saturate(1.8)' }
            ],
            hasStorage: true
        },
        'store-2': {
            name: 'ZAVI Flash-C 512GB',
            category: 'Storage / Flash Storage',
            price: 59.00,
            stars: '★★★★★',
            img: 'assets/images/ssd.jpg',
            desc: 'Ultra-compact high-speed flash drive utilizing dual USB-A and USB-C connectors. Read speeds up to 400MB/s encased inside a protective brushed aluminum rotating luxury housing.',
            colors: [
                { name: 'Titanium White', value: '#ffffff', filter: 'brightness(0.9) saturate(0.55)' }
            ],
            hasStorage: true
        }
    };

    /* --- State Management (Shopping Cart) --- */
    let cart = JSON.parse(localStorage.getItem('zavi_cart_items')) || [];

    /* --- DOM Elements --- */
    const header = document.getElementById('main-header');
    
    // Menu Sidebar
    const menuToggle = document.getElementById('menu-toggle');
    const fullscreenSidebar = document.getElementById('fullscreen-sidebar');
    const menuLinks = document.querySelectorAll('.menu-link');
    
    // Search Drawer
    const searchTrigger = document.getElementById('search-trigger');
    const searchClose = document.getElementById('search-close');
    const searchDrawer = document.getElementById('search-drawer');
    const searchInputField = document.getElementById('search-input-field');
    const trendingSearches = document.querySelectorAll('.suggestion-item a');
    
    // Cart Drawer
    const cartTrigger = document.getElementById('cart-trigger');
    const cartClose = document.getElementById('cart-close');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartEmptyMessage = document.getElementById('cart-empty-message');
    const cartFooter = document.getElementById('cart-drawer-footer');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartCountPill = document.querySelector('.cart-count');
    const startShoppingBtn = document.getElementById('cart-start-shopping');
    
    // Checkout Wizard Drawer Elements
    const cartTitle = document.getElementById('cart-title');
    const checkoutProgressBar = document.getElementById('checkout-progress-bar');
    const progressSteps = document.querySelectorAll('.progress-step');
    const checkoutBackBtn = document.getElementById('checkout-back-btn');
    const checkoutNextBtn = document.getElementById('checkout-next-btn');
    const checkoutPayBtn = document.getElementById('checkout-pay-btn');
    const successDoneBtn = document.getElementById('success-done-btn');
    
    const stepBag = document.getElementById('step-bag');
    const stepShipping = document.getElementById('step-shipping');
    const stepPayment = document.getElementById('step-payment');
    const stepSuccess = document.getElementById('step-success');
    const cartSummaryRow = document.getElementById('cart-summary-row');
    
    // Overlays
    const drawerOverlay = document.getElementById('drawer-overlay');
    
    // Showcase Tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const showcaseGrids = document.querySelectorAll('.showcase-grid');
    
    // Collections section quick links
    const collectionCards = document.querySelectorAll('.collection-card');
    
    // Quick View Modal elements
    const quickViewModal = document.getElementById('quick-view-modal');
    const qvClose = document.getElementById('qv-close');
    const qvMainImage = document.getElementById('qv-main-image');
    const qvProductName = document.getElementById('qv-product-name');
    const qvProductCategory = document.getElementById('qv-product-category');
    const qvProductStars = document.getElementById('qv-product-stars');
    const qvProductDesc = document.getElementById('qv-product-desc');
    const qvProductPrice = document.getElementById('qv-product-price');
    const qvColorSwatches = document.getElementById('qv-color-swatches');
    const qvStorageBlock = document.getElementById('qv-storage-block');
    const qvDeliveryDate = document.getElementById('qv-delivery-date');
    const qvAddToCartBtn = document.getElementById('qv-add-to-cart-btn');
    const qvBuyNowBtn = document.getElementById('qv-buy-now-btn');
    const fbtAddChargerBtn = document.getElementById('fbt-add-charger');
    const qvAngleButtons = document.querySelectorAll('.qv-angle-btn');
    
    // AI Consultant Widget
    const aiWidgetTrigger = document.getElementById('ai-widget-trigger');
    const aiChatWindow = document.getElementById('ai-chat-window');
    const aiChatClose = document.getElementById('ai-chat-close');
    const aiChatBody = document.getElementById('ai-chat-body');
    const aiChatInput = document.getElementById('ai-chat-input');
    const aiChatSend = document.getElementById('ai-chat-send');
    const aiChips = document.querySelectorAll('.ai-chip');
    
    // Best Sellers Carousel
    const bsCarouselTrack = document.getElementById('bs-carousel-track');
    const bsPrevBtn = document.getElementById('bs-prev-btn');
    const bsNextBtn = document.getElementById('bs-next-btn');
    
    // Interactive AI tech cards
    const aiTechCards = document.querySelectorAll('.ai-feature-card');

    // --- Dynamic Audio Sound Wave Injector ---
    const productCategories = document.querySelectorAll('.product-category');
    productCategories.forEach(cat => {
        if (cat.textContent.includes('Audio Squad')) {
            const wave = document.createElement('div');
            wave.className = 'zavi-soundwave';
            wave.style.marginLeft = '8px';
            wave.style.verticalAlign = 'middle';
            wave.innerHTML = `
                <span class="wave-bar"></span>
                <span class="wave-bar"></span>
                <span class="wave-bar"></span>
                <span class="wave-bar"></span>
                <span class="wave-bar"></span>
            `;
            cat.appendChild(wave);
        }
    });

    /* --- 1. Header scroll effect --- */
    const checkScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', checkScroll);
    checkScroll();

    /* --- 2. Fullscreen Menu Sidebar --- */
    const toggleSidebar = () => {
        const isActive = fullscreenSidebar.classList.toggle('active');
        menuToggle.classList.toggle('active');
        document.body.style.overflow = isActive ? 'hidden' : '';
    };

    menuToggle.addEventListener('click', toggleSidebar);

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            const dataTarget = link.getAttribute('data-target');
            
            toggleSidebar(); // Close sidebar

            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerOffset = 90;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
                
                if (dataTarget) {
                    switchTab(dataTarget);
                }
            }
        });
    });

    /* --- 3. Sliding Drawers & Modal --- */
    const openDrawer = (drawer) => {
        closeAllDrawersAndModals();
        drawer.classList.add('active');
        drawerOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeAllDrawersAndModals = () => {
        searchDrawer.classList.remove('active');
        cartDrawer.classList.remove('active');
        quickViewModal.classList.remove('active');
        drawerOverlay.classList.remove('active');
        if (!fullscreenSidebar.classList.contains('active')) {
            document.body.style.overflow = '';
        }
    };

    // Event Triggers
    searchTrigger.addEventListener('click', () => {
        openDrawer(searchDrawer);
        setTimeout(() => searchInputField.focus(), 300);
    });
    searchClose.addEventListener('click', closeAllDrawersAndModals);

    cartTrigger.addEventListener('click', () => openDrawer(cartDrawer));
    cartClose.addEventListener('click', closeAllDrawersAndModals);
    drawerOverlay.addEventListener('click', closeAllDrawersAndModals);
    
    startShoppingBtn.addEventListener('click', () => {
        closeAllDrawersAndModals();
        const showcaseSec = document.getElementById('showcase');
        if (showcaseSec) {
            window.scrollTo({
                top: showcaseSec.offsetTop - 90,
                behavior: 'smooth'
            });
        }
    });

    // --- Predictive Search Engine ---
    const predictivePanel = document.getElementById('predictive-results-panel');
    const predictiveGrid = document.getElementById('predictive-products-grid');
    const trendingPanel = document.getElementById('search-trending-panel');
    
    const handleSearchInput = () => {
        const query = searchInputField.value.trim().toLowerCase();
        if (query.length > 0) {
            trendingPanel.style.display = 'none';
            predictivePanel.style.display = 'block';
            
            const matches = Object.keys(productsDB).filter(id => {
                const p = productsDB[id];
                return p.name.toLowerCase().includes(query) || 
                       p.category.toLowerCase().includes(query) || 
                       p.desc.toLowerCase().includes(query);
            });
            
            predictiveGrid.innerHTML = '';
            if (matches.length > 0) {
                matches.forEach(id => {
                    const product = productsDB[id];
                    const item = document.createElement('div');
                    item.className = 'predictive-item';
                    item.innerHTML = `
                        <img class="predictive-img" src="${product.img}" alt="${product.name}">
                        <div class="predictive-info">
                            <h4 class="predictive-name">${product.name}</h4>
                            <span class="predictive-cat">${product.category}</span>
                        </div>
                        <span class="predictive-price">$${product.price.toFixed(2)}</span>
                    `;
                    item.addEventListener('click', () => {
                        closeAllDrawersAndModals();
                        openQuickView(id);
                    });
                    predictiveGrid.appendChild(item);
                });
            } else {
                predictiveGrid.innerHTML = `<div style="font-size:0.88rem;color:var(--text-light);padding:0.5rem 0;">No matching products found.</div>`;
            }
        } else {
            predictivePanel.style.display = 'none';
            trendingPanel.style.display = 'block';
        }
    };
    
    searchInputField.addEventListener('input', handleSearchInput);
    
    // Voice / Image search simulation
    const voiceBtn = document.getElementById('search-voice-btn');
    const imageBtn = document.getElementById('search-image-btn');
    
    if (voiceBtn) {
        voiceBtn.addEventListener('click', () => {
            searchInputField.value = '';
            searchInputField.placeholder = 'Listening to voice coordinate stream...';
            voiceBtn.style.color = 'var(--accent-blue)';
            
            setTimeout(() => {
                searchInputField.value = 'ZAVI Master ANC Pro';
                searchInputField.placeholder = 'Search products, technology...';
                voiceBtn.style.color = '';
                handleSearchInput();
            }, 1800);
        });
    }
    
    if (imageBtn) {
        imageBtn.addEventListener('click', () => {
            searchInputField.value = '';
            searchInputField.placeholder = 'Scanning visual schema...';
            imageBtn.style.color = 'var(--accent-blue)';
            
            setTimeout(() => {
                searchInputField.value = 'Chronos Titanium';
                searchInputField.placeholder = 'Search products, technology...';
                imageBtn.style.color = '';
                handleSearchInput();
            }, 1800);
        });
    }

    // Trending Search triggers
    trendingSearches.forEach(suggestion => {
        suggestion.addEventListener('click', (e) => {
            e.preventDefault();
            const searchVal = suggestion.getAttribute('data-search');
            searchInputField.value = searchVal;
            handleSearchInput();
        });
    });

    /* --- 4. Tab Switching Logic --- */
    const switchTab = (tabId) => {
        tabButtons.forEach(btn => {
            if (btn.getAttribute('data-tab') === tabId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        showcaseGrids.forEach(grid => {
            if (grid.getAttribute('id') === `tab-${tabId}`) {
                grid.classList.add('active');
            } else {
                grid.classList.remove('active');
            }
        });
    };

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Collections grid click triggers
    collectionCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const tabId = card.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    /* --- 5. Interactive AI Technology Cards Grid --- */
    aiTechCards.forEach(card => {
        card.addEventListener('click', () => {
            // If card is already active, close it, otherwise toggle other active cards off
            const wasActive = card.classList.contains('active');
            aiTechCards.forEach(c => c.classList.remove('active'));
            if (!wasActive) {
                card.classList.add('active');
            }
        });
    });

    /* --- 6. Best Sellers Carousel Navigation --- */
    let currentCarouselIndex = 0;
    const updateCarouselPosition = () => {
        const slides = document.querySelectorAll('.carousel-slide');
        const gap = 40; // 2.5rem in pixels
        if (slides.length > 0) {
            const slideWidth = slides[0].clientWidth;
            const translateVal = currentCarouselIndex * (slideWidth + gap);
            bsCarouselTrack.style.transform = `translateX(-${translateVal}px)`;
        }
    };

    bsNextBtn.addEventListener('click', () => {
        const slidesCount = document.querySelectorAll('.carousel-slide').length;
        let visibleSlides = 3;
        if (window.innerWidth <= 992) visibleSlides = 2;
        if (window.innerWidth <= 600) visibleSlides = 1;

        if (currentCarouselIndex < slidesCount - visibleSlides) {
            currentCarouselIndex++;
            updateCarouselPosition();
        }
    });

    bsPrevBtn.addEventListener('click', () => {
        if (currentCarouselIndex > 0) {
            currentCarouselIndex--;
            updateCarouselPosition();
        }
    });

    window.addEventListener('resize', updateCarouselPosition);

    /* --- 7. Floating AI Product Consultant Widget --- */
    aiWidgetTrigger.addEventListener('click', () => {
        aiChatWindow.classList.toggle('active');
    });

    aiChatClose.addEventListener('click', () => {
        aiChatWindow.classList.remove('active');
    });

    // Simulated consultant chatbot conversations
    const consultantResponses = {
        'default': 'ZAVI designs devices using aerospace titanium and custom Z1 processors. Which of our product divisions (Audio, Wearables, Charging, or Storage) are you exploring?',
        'gaming': 'ZAVI Nexus Gaming earbuds utilize Z-Link 2.4GHz sync for a 28ms sound-to-screen response, coupled with custom spatial coordinates. Perfect for high-intensity gaming environments.',
        'gan': 'GaN (Gallium Nitride) charging handles double the power frequency of standard chargers. ZAVI chargers stay up to 15°C cooler thanks to proprietary heat-sinking materials.',
        'watch': 'The ZAVI Chronos Titanium features modular digital crowns, biosensors, and sapphire glass. Its case is forged from grade-5 titanium, offering unmatched structural strength.'
    };

    const appendMessage = (text, type) => {
        const msgEl = document.createElement('div');
        msgEl.className = `ai-msg ${type}`;
        msgEl.innerHTML = `<p>${text}</p>`;
        aiChatBody.appendChild(msgEl);
        aiChatBody.scrollTop = aiChatBody.scrollHeight;
    };

    const sendConsultantInquiry = (queryText) => {
        if (!queryText.trim()) return;
        appendMessage(queryText, 'sent');
        aiChatInput.value = '';

        // Add typing placeholder
        const typingEl = document.createElement('div');
        typingEl.className = 'ai-msg received typing-msg';
        typingEl.innerHTML = `<p><em>ZAVI Consultant is typing...</em></p>`;
        aiChatBody.appendChild(typingEl);
        aiChatBody.scrollTop = aiChatBody.scrollHeight;

        setTimeout(() => {
            // Remove typing placeholder
            typingEl.remove();
            let lower = queryText.toLowerCase();
            let response = consultantResponses.default;
            if (lower.includes('gaming') || lower.includes('earbud')) {
                response = consultantResponses.gaming;
            } else if (lower.includes('gan') || lower.includes('charg')) {
                response = consultantResponses.gan;
            } else if (lower.includes('chronos') || lower.includes('watch')) {
                response = consultantResponses.watch;
            }
            appendMessage(response, 'received');
        }, 1200);
    };

    aiChatSend.addEventListener('click', () => sendConsultantInquiry(aiChatInput.value));
    aiChatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendConsultantInquiry(aiChatInput.value);
    });

    aiChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const query = chip.getAttribute('data-query');
            sendConsultantInquiry(query);
        });
    });

    /* --- 8. Product Quick View Modal Engine --- */
    let currentSelectedProduct = null;
    let selectedColorFilter = 'none';

    // Set dynamic delivery date (Tomorrow)
    const updateDeliveryDate = () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        qvDeliveryDate.textContent = tomorrow.toLocaleDateString('en-US', options);
    };

    const openQuickView = (productId) => {
        const product = productsDB[productId];
        if (!product) return;

        currentSelectedProduct = { ...product, id: productId };
        selectedColorFilter = 'none';

        // Set static fields
        qvProductName.textContent = product.name;
        if (product.category.toLowerCase().includes('audio')) {
            const wave = document.createElement('div');
            wave.className = 'zavi-soundwave';
            wave.style.marginLeft = '12px';
            wave.innerHTML = `
                <span class="wave-bar"></span>
                <span class="wave-bar"></span>
                <span class="wave-bar"></span>
                <span class="wave-bar"></span>
                <span class="wave-bar"></span>
            `;
            qvProductName.appendChild(wave);
        }
        qvProductCategory.textContent = product.category;
        qvProductStars.textContent = product.stars;
        qvProductDesc.textContent = product.desc;
        qvProductPrice.textContent = `$${product.price.toFixed(2)}`;
        qvMainImage.src = product.img;
        qvMainImage.style.filter = 'none';
        
        // Setup Swatches
        qvColorSwatches.innerHTML = '';
        product.colors.forEach((color, idx) => {
            const button = document.createElement('button');
            button.className = `swatch-btn ${idx === 0 ? 'active' : ''}`;
            button.style.backgroundColor = color.value;
            button.setAttribute('data-filter', color.filter);
            button.setAttribute('title', color.name);
            
            button.addEventListener('click', () => {
                document.querySelectorAll('.swatch-btn').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                selectedColorFilter = color.filter;
                qvMainImage.style.filter = color.filter;
            });
            qvColorSwatches.appendChild(button);
        });

        // Setup angle triggers
        qvAngleButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('[data-angle="front"]').classList.add('active');

        // Toggle size/storage block
        if (product.hasStorage) {
            qvStorageBlock.style.display = 'block';
        } else {
            qvStorageBlock.style.display = 'none';
        }

        updateDeliveryDate();
        openDrawer(quickViewModal);
    };

    // Hook up triggers for all showcase Quick View buttons
    document.body.addEventListener('click', (e) => {
        const target = e.target.closest('.btn-qv');
        if (target) {
            const id = target.getAttribute('data-id');
            openQuickView(id);
        }
    });

    qvClose.addEventListener('click', closeAllDrawersAndModals);

    // Dynamic angle switches (filters used to simulate 3D rotation shifts)
    qvAngleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            qvAngleButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const angleVal = btn.getAttribute('data-angle');
            
            if (angleVal === 'side') {
                qvMainImage.style.filter = selectedColorFilter + ' rotateY(180deg)';
            } else if (angleVal === 'case') {
                qvMainImage.style.filter = selectedColorFilter + ' hue-rotate(90deg)';
            } else {
                qvMainImage.style.filter = selectedColorFilter;
            }
        });
    });

    // Dynamic storage click state
    document.querySelectorAll('.storage-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.storage-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Dynamic warranty selection state
    document.querySelectorAll('.warranty-option').forEach(option => {
        const input = option.querySelector('input');
        input.addEventListener('change', () => {
            document.querySelectorAll('.warranty-option').forEach(o => o.classList.remove('active'));
            if (input.checked) {
                option.classList.add('active');
            }
        });
    });

    /* --- 9. Shopping Cart Operations --- */
    const saveCart = () => {
        localStorage.setItem('zavi_cart_items', JSON.stringify(cart));
    };

    const updateCartCount = () => {
        const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountPill.textContent = totalQty;
        cartCountPill.style.transform = 'translate(25%, -25%) scale(1.2)';
        setTimeout(() => {
            cartCountPill.style.transform = 'translate(25%, -25%) scale(1)';
        }, 200);
    };

    const renderCart = () => {
        updateCartCount();
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '';
            cartEmptyMessage.style.display = 'flex';
            cartFooter.style.display = 'none';
            if (checkoutProgressBar) checkoutProgressBar.style.display = 'none';
            return;
        }

        cartEmptyMessage.style.display = 'none';
        cartFooter.style.display = 'block';

        let subtotalVal = 0;
        cartItemsContainer.innerHTML = '';

        cart.forEach(item => {
            subtotalVal += item.price * item.quantity;
            
            const cartItemEl = document.createElement('div');
            cartItemEl.className = 'cart-item';
            cartItemEl.innerHTML = `
                <img src="${item.img}" alt="${item.name}" class="cart-item-img" style="filter: ${item.filter || 'none'}">
                <div class="cart-item-details">
                    <div>
                        <h4 class="cart-item-title">${item.name}</h4>
                        <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <div class="cart-item-qty-row">
                        <div class="qty-control">
                            <button class="qty-btn minus-qty" data-id="${item.id}">-</button>
                            <span class="qty-val">${item.quantity}</span>
                            <button class="qty-btn plus-qty" data-id="${item.id}">+</button>
                        </div>
                        <button class="cart-item-remove remove-item" data-id="${item.id}">Remove</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemEl);
        });

        const finalSubtotal = subtotalVal * (1 - (typeof couponDiscount !== 'undefined' ? couponDiscount : 0));
        cartSubtotal.textContent = `$${finalSubtotal.toFixed(2)}`;

        // Dynamic listeners
        document.querySelectorAll('.minus-qty').forEach(btn => {
            btn.addEventListener('click', () => modifyQuantity(btn.getAttribute('data-id'), -1));
        });

        document.querySelectorAll('.plus-qty').forEach(btn => {
            btn.addEventListener('click', () => modifyQuantity(btn.getAttribute('data-id'), 1));
        });

        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', () => removeItem(btn.getAttribute('data-id')));
        });
    };

    const addToCart = (id, name, price, img, filter = 'none') => {
        const parsedPrice = parseFloat(price);
        const existingItem = cart.find(item => item.id === id && item.filter === filter);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id,
                name,
                price: parsedPrice,
                img,
                filter,
                quantity: 1
            });
        }

        saveCart();
        renderCart();
        openDrawer(cartDrawer);
    };

    const modifyQuantity = (id, change) => {
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                cart = cart.filter(i => i.id !== id);
            }
            saveCart();
            renderCart();
        }
    };

    const removeItem = (id) => {
        cart = cart.filter(item => item.id !== id);
        saveCart();
        renderCart();
    };

    // Showcase grid add-to-cart clicks
    document.body.addEventListener('click', (e) => {
        const btn = e.target.closest('.add-to-cart-btn');
        if (btn) {
            const id = btn.getAttribute('data-id');
            const name = btn.getAttribute('data-name');
            const price = btn.getAttribute('data-price');
            const img = btn.getAttribute('data-img');
            addToCart(id, name, price, img, 'none');
        }
    });

    // Quick View Buy triggers
    qvAddToCartBtn.addEventListener('click', () => {
        if (currentSelectedProduct) {
            addToCart(
                currentSelectedProduct.id,
                currentSelectedProduct.name,
                currentSelectedProduct.price,
                currentSelectedProduct.img,
                selectedColorFilter
            );
            closeAllDrawersAndModals();
        }
    });

    qvBuyNowBtn.addEventListener('click', () => {
        if (currentSelectedProduct) {
            addToCart(
                currentSelectedProduct.id,
                currentSelectedProduct.name,
                currentSelectedProduct.price,
                currentSelectedProduct.img,
                selectedColorFilter
            );
            closeAllDrawersAndModals();
            openDrawer(cartDrawer);
        }
    });

    // Frequently Bought Together Add-on
    fbtAddChargerBtn.addEventListener('click', () => {
        addToCart('charge-1', 'ZAVI GaN 140W Core Charger', 69.00, 'assets/images/charger.jpg', 'none');
        alert('Bundle added to bag.');
    });

    // --- Checkout Wizard Controller ---
    let currentCheckoutStep = 1;
    let couponDiscount = 0; // 0.20 for 20%
    
    const calculateSubtotal = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
        });
        return total;
    };

    const updateCheckoutStep = () => {
        stepBag.style.display = 'none';
        stepShipping.style.display = 'none';
        stepPayment.style.display = 'none';
        stepSuccess.style.display = 'none';
        
        if (currentCheckoutStep === 4 || cart.length === 0) {
            checkoutProgressBar.style.display = 'none';
        } else {
            checkoutProgressBar.style.display = 'flex';
            progressSteps.forEach((step, idx) => {
                if (idx < currentCheckoutStep) {
                    step.classList.add('active');
                } else {
                    step.classList.remove('active');
                }
            });
        }
        
        if (currentCheckoutStep === 1) {
            cartTitle.textContent = 'Shopping Bag';
            stepBag.style.display = 'block';
            cartSummaryRow.style.display = 'flex';
            
            checkoutBackBtn.style.display = 'none';
            checkoutNextBtn.style.display = 'block';
            checkoutNextBtn.textContent = 'Proceed to Details';
            checkoutPayBtn.style.display = 'none';
        } 
        else if (currentCheckoutStep === 2) {
            cartTitle.textContent = 'Delivery Details';
            stepShipping.style.display = 'block';
            cartSummaryRow.style.display = 'flex';
            
            checkoutBackBtn.style.display = 'block';
            checkoutNextBtn.style.display = 'block';
            checkoutNextBtn.textContent = 'Proceed to Payment';
            checkoutPayBtn.style.display = 'none';
        } 
        else if (currentCheckoutStep === 3) {
            cartTitle.textContent = 'Secure Payment';
            stepPayment.style.display = 'block';
            cartSummaryRow.style.display = 'flex';
            
            checkoutBackBtn.style.display = 'block';
            checkoutNextBtn.style.display = 'none';
            checkoutPayBtn.style.display = 'block';
            checkoutPayBtn.textContent = `Pay Now $${(calculateSubtotal() * (1 - couponDiscount)).toFixed(2)}`;
        } 
        else if (currentCheckoutStep === 4) {
            cartTitle.textContent = 'Order Confirmed';
            stepSuccess.style.display = 'block';
            cartSummaryRow.style.display = 'none';
            
            checkoutBackBtn.style.display = 'none';
            checkoutNextBtn.style.display = 'none';
            checkoutPayBtn.style.display = 'none';
            
            const orderRefNum = document.getElementById('order-ref-num');
            const orderDelivTarget = document.getElementById('order-deliv-target');
            
            if (orderRefNum) {
                const randomRef = 'ZV-' + Math.floor(100000 + Math.random() * 900000) + '-' + String.fromCharCode(65 + Math.floor(Math.random() * 26)) + String.fromCharCode(65 + Math.floor(Math.random() * 26));
                orderRefNum.textContent = randomRef;
            }
            
            if (orderDelivTarget) {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                const options = { weekday: 'long', month: 'long', day: 'numeric' };
                orderDelivTarget.textContent = tomorrow.toLocaleDateString('en-US', options);
            }
            
            cart = [];
            localStorage.removeItem('zavi_cart_items');
            renderCart();
        }
    };
    
    checkoutNextBtn.addEventListener('click', () => {
        if (currentCheckoutStep === 1) {
            currentCheckoutStep = 2;
        } else if (currentCheckoutStep === 2) {
            const name = document.getElementById('co-name').value.trim();
            const email = document.getElementById('co-email').value.trim();
            const address = document.getElementById('co-address').value.trim();
            if (!name || !email || !address) {
                alert('Please complete all delivery information.');
                return;
            }
            currentCheckoutStep = 3;
        }
        updateCheckoutStep();
    });
    
    checkoutBackBtn.addEventListener('click', () => {
        if (currentCheckoutStep > 1) {
            currentCheckoutStep--;
            updateCheckoutStep();
        }
    });
    
    checkoutPayBtn.addEventListener('click', () => {
        const holder = document.getElementById('pay-cardholder').value.trim();
        const num = document.getElementById('pay-cardnum').value.trim();
        const expiry = document.getElementById('pay-expiry').value.trim();
        const cvv = document.getElementById('pay-cvv').value.trim();
        
        if (!holder || !num || !expiry || !cvv) {
            alert('Please enter your card payment details.');
            return;
        }
        
        checkoutPayBtn.textContent = 'Processing Payment...';
        checkoutPayBtn.disabled = true;
        
        setTimeout(() => {
            checkoutPayBtn.disabled = false;
            currentCheckoutStep = 4;
            updateCheckoutStep();
        }, 1500);
    });
    
    if (successDoneBtn) {
        successDoneBtn.addEventListener('click', () => {
            closeAllDrawersAndModals();
            setTimeout(() => {
                currentCheckoutStep = 1;
                updateCheckoutStep();
            }, 500);
        });
    }
    
    // Reset wizard steps when cart opens
    cartTrigger.addEventListener('click', () => {
        currentCheckoutStep = 1;
        updateCheckoutStep();
    });
    
    // Coupon Application
    const couponInput = document.getElementById('pay-coupon');
    const couponBtn = document.getElementById('apply-coupon-btn');
    const couponMsg = document.getElementById('coupon-msg');
    
    if (couponBtn) {
        couponBtn.addEventListener('click', () => {
            const code = couponInput.value.trim().toUpperCase();
            if (code === 'ZAVI20') {
                couponDiscount = 0.20;
                couponMsg.textContent = 'Coupon ZAVI20 applied (20% Off!)';
                couponMsg.style.color = '#10b981';
                couponMsg.style.display = 'block';
                
                const subtotalVal = calculateSubtotal();
                const discountedVal = subtotalVal * (1 - couponDiscount);
                cartSubtotal.textContent = `$${discountedVal.toFixed(2)}`;
                checkoutPayBtn.textContent = `Pay Now $${discountedVal.toFixed(2)}`;
            } else {
                couponMsg.textContent = 'Invalid Coupon Code';
                couponMsg.style.color = '#ef4444';
                couponMsg.style.display = 'block';
            }
        });
    }
    
    // Real-time Card Preview updates
    const inputHolder = document.getElementById('pay-cardholder');
    const inputNum = document.getElementById('pay-cardnum');
    const inputExpiry = document.getElementById('pay-expiry');
    
    const cardNameDisp = document.getElementById('card-name-disp');
    const cardNumDisp = document.getElementById('card-num-disp');
    const cardExpiryDisp = document.getElementById('card-expiry-disp');
    
    if (inputHolder) {
        inputHolder.addEventListener('input', () => {
            cardNameDisp.textContent = inputHolder.value.trim().toUpperCase() || 'CARDHOLDER NAME';
        });
    }
    
    if (inputNum) {
        inputNum.addEventListener('input', () => {
            let val = inputNum.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            let matches = val.match(/\d{4,16}/g);
            let match = matches && matches[0] || '';
            let parts = [];
            for (let i=0, len=match.length; i<len; i+=4) {
                parts.push(match.substring(i, i+4));
            }
            if (parts.length > 0) {
                inputNum.value = parts.join(' ');
            } else {
                inputNum.value = val;
            }
            cardNumDisp.textContent = inputNum.value || '•••• •••• •••• ••••';
        });
    }
    
    if (inputExpiry) {
        inputExpiry.addEventListener('input', () => {
            let val = inputExpiry.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            if (val.length >= 2) {
                inputExpiry.value = val.substring(0, 2) + '/' + val.substring(2, 4);
            } else {
                inputExpiry.value = val;
            }
            cardExpiryDisp.textContent = inputExpiry.value || 'MM/YY';
        });
    }

    const sidebarAccountBtn = document.getElementById('sidebar-account-btn');
    if (sidebarAccountBtn) {
        sidebarAccountBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleSidebar();
            alert('ZAVI Account portal is in testing phase.');
        });
    }

    renderCart();

    /* --- 10. Scroll Count-Up Statistics (Observer) --- */
    const statsSection = document.querySelector('.trust-stats-section');
    const statCards = document.querySelectorAll('.stat-card');
    let statsAnimated = false;

    const runCountUp = () => {
        statCards.forEach(card => {
            const numEl = card.querySelector('.stat-number');
            const targetVal = parseInt(card.getAttribute('data-target'));
            let currentVal = 0;
            const duration = 1500; // ms
            const stepTime = Math.max(Math.floor(duration / targetVal), 15);
            
            const timer = setInterval(() => {
                // Increment values exponentially or linearly
                const increment = Math.ceil(targetVal / 80);
                currentVal += increment;
                if (currentVal >= targetVal) {
                    currentVal = targetVal;
                    clearInterval(timer);
                }
                
                // Format display names
                if (targetVal >= 1000000) {
                    numEl.textContent = (currentVal / 1000000).toFixed(1) + 'M+';
                } else if (targetVal === 99) {
                    numEl.textContent = currentVal + '%';
                } else {
                    numEl.textContent = currentVal + '+';
                }
            }, stepTime);
        });
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                runCountUp();
                statsAnimated = true;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    if (statsSection) statsObserver.observe(statsSection);

    /* --- 11. Scroll Reveal Animations --- */
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -50px 0px" });

    reveals.forEach(reveal => revealObserver.observe(reveal));

    // Force background video autoplay play loop
    const bgVideo = document.querySelector('.hero-video-bg');
    if (bgVideo) {
        const playVideo = () => {
            bgVideo.play().catch(error => {
                console.log("Autoplay suspended or blocked by browser policy, retrying on interaction...", error);
            });
        };
        playVideo();
        // Fallback for strict browser policies
        document.body.addEventListener('click', playVideo, { once: true });
        document.body.addEventListener('touchstart', playVideo, { once: true });
    }

    // --- Preloader fade-out ---
    const preloader = document.getElementById('preloader');
    if (preloader) {
        const hidePreloader = () => {
            if (!preloader.classList.contains('loaded')) {
                preloader.classList.add('loaded');
            }
        };
        window.addEventListener('load', () => {
            setTimeout(hidePreloader, 800); // 800ms luxury delay
        });
        // Backup timeout
        setTimeout(hidePreloader, 3500);
    }

    // --- Custom Interactive Cursor with Easing & Magnetic Badging ---
    const cursor = document.getElementById('custom-cursor');
    const cursorBadge = document.getElementById('cursor-badge');
    
    if (cursor && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        let mouseX = -100, mouseY = -100;
        let cursorX = -100, cursorY = -100;
        const speed = 0.16; // Lerp speed coefficient

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const updateCursor = () => {
            cursorX += (mouseX - cursorX) * speed;
            cursorY += (mouseY - cursorY) * speed;
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
            requestAnimationFrame(updateCursor);
        };
        updateCursor();

        // Event delegation for hover states
        window.addEventListener('mouseover', (e) => {
            const target = e.target;
            const interactive = target.closest('a, button, [role="button"], .tab-btn, .swatch-btn, .storage-btn, .warranty-option, .ai-chip, .product-card, .collection-card');
            
            if (interactive) {
                cursor.classList.add('active');
                
                let badgeText = '';
                if (interactive.classList.contains('product-card') || interactive.classList.contains('collection-card')) {
                    badgeText = 'Explore';
                } else if (interactive.classList.contains('btn-quick-view') || interactive.classList.contains('quick-view-btn') || interactive.classList.contains('qv-trigger')) {
                    badgeText = 'Quick View';
                } else if (interactive.id === 'search-trigger' || interactive.id === 'cart-trigger') {
                    badgeText = 'Open';
                } else if (interactive.classList.contains('modal-close') || interactive.classList.contains('drawer-close') || interactive.classList.contains('ai-chat-close')) {
                    badgeText = 'Close';
                }
                
                if (badgeText) {
                    cursorBadge.textContent = badgeText;
                    cursor.classList.add('badge-active');
                } else {
                    cursor.classList.remove('badge-active');
                }
            } else {
                cursor.classList.remove('active');
                cursor.classList.remove('badge-active');
            }
        });
        
        // Hide cursor when leaving window
        document.addEventListener('mouseleave', () => {
            mouseX = -100;
            mouseY = -100;
            cursor.classList.remove('active');
            cursor.classList.remove('badge-active');
        });
    }

    // --- 3D Mouse Tilt Parallax Effect ---
    const tiltCards = document.querySelectorAll('.product-card, .collection-card, .highlight-card');
    
    tiltCards.forEach(card => {
        card.style.transformStyle = 'preserve-3d';
        card.style.perspective = '1000px';
        
        const img = card.querySelector('img');
        const text = card.querySelector('.product-info, .collection-content, .hl-desc, .hl-title');
        
        if (img) img.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        if (text) text.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((centerY - y) / centerY) * 8; // Max 8 deg
            const rotateY = ((x - centerX) / centerX) * 8;
            
            card.style.transition = 'transform 0.1s ease, box-shadow 0.2s ease';
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            card.style.boxShadow = '0 20px 40px rgba(0, 102, 255, 0.06), var(--shadow-premium)';
            
            if (img) img.style.transform = 'translateZ(25px) scale(1.03)';
            if (text) text.style.transform = 'translateZ(15px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            card.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0px)';
            card.style.boxShadow = '';
            
            if (img) img.style.transform = 'translateZ(0) scale(1)';
            if (text) text.style.transform = 'translateZ(0)';
        });
    });
});
