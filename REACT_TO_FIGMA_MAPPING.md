# React Components → Figma Elements Mapping for Explori

## Your Component Structure → Figma Layout

Based on your HomePage.tsx, here's how to map each React component to Figma design elements:

### **HomePage Layout (393×852px Frame)**

```
HomePage.tsx Structure:
├── HeaderSection
├── SearchSection  
├── AppBannerSection
├── FeaturedPlacesSection
├── EventsSection
├── QuickActionsSection
├── ConnectionHintSection
└── BottomNavigation (fixed)
```

## Component-by-Component Translation

### **1. HeaderSection.tsx → Figma Header**

**React Code:**
```jsx
<div className="px-6 pt-12 pb-4">
  <h1>Welcome to explori</h1>
  <p>Discover local experiences, events & adventure</p>
  <p>Built for connection and discovery</p>
</div>
```

**Figma Elements:**
```
📐 Header Container [Rectangle]
├── Size: 393×100px
├── Background: #fdfcfb  
├── Padding: 24px sides, 48px top, 16px bottom
├── Text 1: "Welcome to explori" 
│   ├── Font: 24px, medium weight
│   ├── Color: #1f2937
│   └── Bravo Tag: [text]
├── Text 2: "Discover local experiences, events & adventure"
│   ├── Font: 16px, normal weight  
│   ├── Color: #64748b
│   └── Bravo Tag: [text]
└── Text 3: "Built for connection and discovery"
    ├── Font: 12px, normal weight
    ├── Color: #64748b
    └── Bravo Tag: [text]
```

### **2. FeaturedPlacesSection.tsx → Figma Place Cards**

**React Code (simplified):**
```jsx
<div className="px-6 mb-6">
  <h2>🍽️ Best Places to Eat, Stay & Explore</h2>
  <div className="bg-white rounded-xl">
    <img src={place.image} className="w-full h-40" />
    <div className="p-4">
      <h3>{place.title}</h3>
      <p>{place.subtitle}</p>
      <span>{place.price}</span>
      <Button>View Details</Button>
      <Button>Book Now</Button>
    </div>
  </div>
</div>
```

**Figma Elements:**
```
📐 Places Section Container [Rectangle]
├── Size: 393×600px (approximate)
├── Padding: 24px sides
├── Section Header
│   ├── Title: "🍽️ Best Places to Eat, Stay & Explore"
│   │   ├── Font: 18px, medium weight
│   │   ├── Color: #1f2937  
│   │   └── Bravo Tag: [text]
│   └── "View All" Button
│       ├── Color: #ff6b35
│       └── Bravo Tag: [button]
│
├── Place Card 1 [Rectangle]
│   ├── Size: 361×280px
│   ├── Background: white
│   ├── Border radius: 12px
│   ├── Border: 1px #e5e7eb
│   ├── Place Image [Rectangle]
│   │   ├── Size: 361×160px
│   │   ├── Fill: placeholder image or gray
│   │   └── Bravo Tag: [bind:image]
│   ├── Content Area [Container]
│   │   ├── Padding: 16px
│   │   ├── Place Name: "Coastal Café"
│   │   │   ├── Font: 16px, medium weight
│   │   │   ├── Color: #1f2937
│   │   │   └── Bravo Tag: [bind:title]
│   │   ├── Subtitle: "Restaurant • 4.8 ⭐"
│   │   │   ├── Font: 14px, normal weight
│   │   │   ├── Color: #64748b
│   │   │   └── Bravo Tag: [bind:subtitle]
│   │   ├── Price Row [Container - Flex]
│   │   │   ├── Price: "$25-40"
│   │   │   │   └── Bravo Tag: [bind:price]
│   │   │   └── Distance: "📍 0.3 km"
│   │   │       └── Bravo Tag: [text]
│   │   └── Button Row [Container - Flex]
│   │       ├── "View Details" Button [Rectangle]
│   │       │   ├── Size: 170×36px
│   │       │   ├── Border: 1px #ff6b35
│   │       │   ├── Background: transparent
│   │       │   ├── Text color: #ff6b35
│   │       │   └── Bravo Tag: [button][link:PlaceDetail]
│   │       └── "Book Now" Button [Rectangle]
│   │           ├── Size: 170×36px  
│   │           ├── Background: #ff6b35
│   │           ├── Text color: white
│   │           └── Bravo Tag: [button][link:Booking]
│
└── Place Card 2 [Same structure as Card 1]
    ├── Title: "Mountain View Hotel"
    ├── Subtitle: "Hotel • 4.6 ⭐"
    └── Price: "$150/night"
```

### **3. BottomNavigation → Figma Bottom Nav**

**React Structure:**
```jsx
<div className="fixed bottom-0 w-full max-w-[393px]">
  {/* 5 navigation items */}
</div>
```

**Figma Elements:**
```
📐 Bottom Navigation [Rectangle]
├── Size: 393×80px
├── Position: Fixed to bottom
├── Background: white
├── Top border: 1px #e5e7eb
├── Nav Item 1 - Home [Container]
│   ├── Size: 78×80px
│   ├── Home Icon [Icon - 24×24px]
│   │   └── Color: #ff6b35 (active)
│   ├── "Home" Text
│   │   ├── Font: 12px
│   │   ├── Color: #ff6b35 (active)
│   │   └── Bravo Tag: [text]
│   └── Bravo Tag: [button][link:Home]
├── Nav Item 2 - Map [Container]
│   ├── Map Icon [Icon - 24×24px]
│   │   └── Color: #64748b (inactive)
│   ├── "Map" Text
│   │   └── Color: #64748b
│   └── Bravo Tag: [button][link:Map]
├── Nav Item 3 - Add Post
│   └── Bravo Tag: [button][link:AddPost]
├── Nav Item 4 - Planner  
│   └── Bravo Tag: [button][link:Planner]
└── Nav Item 5 - Profile
    └── Bravo Tag: [button][link:Profile]
```

## **Figma Recreation Order**

### **Phase 1: Basic Layout (30 minutes)**
1. **Create iPhone frame** (393×852px)
2. **Add background** (#fdfcfb)
3. **Create header section** with text elements
4. **Add bottom navigation** with 5 buttons

### **Phase 2: Place Cards (45 minutes)**
1. **Create place card container**
2. **Add placeholder image rectangle** 
3. **Add text elements** (title, subtitle, price)
4. **Create buttons** (View Details, Book Now)
5. **Duplicate for second card**

### **Phase 3: Bravo Tags (20 minutes)**
1. **Tag all containers** with [container]
2. **Tag navigation buttons** with [button][link:PageName]
3. **Tag dynamic content** with [bind:fieldName]
4. **Tag action buttons** with [button]

## **Design Values to Copy**

### **Colors (from your app):**
- Background: `#fdfcfb`
- Primary: `#ff6b35` 
- Text Dark: `#1f2937`
- Text Light: `#64748b`
- White: `#ffffff`
- Border: `#e5e7eb`

### **Typography:**
- H1: 24px, medium weight
- H2: 18px, medium weight  
- Body: 16px, normal weight
- Small: 14px, normal weight
- Tiny: 12px, normal weight

### **Spacing:**
- Section padding: 24px sides
- Card padding: 16px
- Button height: 36px
- Bottom nav height: 80px

### **Border Radius:**
- Cards: 12px
- Buttons: 8px
- Images: 8px

## **Critical Bravo Tag Mapping**

**Your existing React tags → Figma tags:**

```
data-bravo="[container]" → [container]
data-bravo="[text]" → [text] 
data-bravo="[bind:title]" → [bind:title]
data-bravo="[button]" → [button] or [button][link:PageName]
```

**Navigation flow to implement:**
- Home → PlaceDetail → Back to Home
- Bottom nav: Home ↔ Map ↔ AddPost ↔ Planner ↔ Profile

## **Success Criteria**

✅ **Visual Match**
- Looks identical to your React app
- Same colors, spacing, typography
- Same layout and proportions

✅ **Functional Tags**
- All navigation works
- Place cards link to detail page
- Bottom nav switches screens
- Bravo plugin validates without errors

✅ **Content Structure**
- Dynamic content uses [bind:] tags
- Static content uses [text] tags
- All interactive elements have [button] tags

This mapping guide shows you exactly how to translate your existing React components into Figma design elements that will work with Bravo Studio! 🎯