# BlogForge 🛠️

A simple and extensible blog backend API built with TypeScript, Express.js, PostgreSQL, and Knex.js.

## 📌 Description

**BlogForge** is a backend application that allows users to manage blog categories, posts, and comments through a RESTful API.  
It features soft delete functionality, timestamp tracking, and advanced filtering via query parameters.  
This backend is ideal for building a modern content management system or a personal blog platform without authentication.

## 📚 Project Structure

- **Language**: TypeScript
- **Web Framework**: Express.js
- **Database**: PostgreSQL
- **Query Builder**: Knex.js

## 🧩 Entities

### 🏷️ Category
- `id`
- `name`
- `created_at`
- `deleted_at` (nullable)

### 📝 Post
- `id`
- `category_id`
- `title`
- `content`
- `created_at`
- `published_at` (nullable)
- `deleted_at` (nullable)

### 💬 Comment
- `id`
- `post_id`
- `content`
- `commenter_name`
- `created_at`

## 🌐 API Endpoints

### 🔹 Category
| Method | Route | Description |
|--------|-------|-------------|
| POST   | `/categories` | Create a new category |
| GET    | `/categories` | List categories |
| GET    | `/categories/:id` | Get category by ID |
| PATCH  | `/categories/:id` | Update a category |
| DELETE | `/categories/:id` | Soft delete a category |

#### Category Filters
- `showDeleted=true` → Show all
- `showDeleted=false` → Show only active (default)
- `showDeleted=onlyDeleted` → Show only deleted

### 🔹 Post
| Method | Route | Description |
|--------|-------|-------------|
| POST   | `/posts` | Create a new post |
| GET    | `/posts` | List posts |
| GET    | `/posts/:id` | Get post by ID |
| PATCH  | `/posts/:id` | Update a post |
| DELETE | `/posts/:id` | Soft delete a post |

#### Post Filters
- `category=<id>`
- `status=published|draft|all`
- `showDeleted=true|false|onlyDeleted`

### 🔹 Comment
| Method | Route | Description |
|--------|-------|-------------|
| POST   | `/comments` | Create a comment |
| GET    | `/comments` | List comments |
| GET    | `/comments/:id` | Get comment by ID |
| PATCH  | `/comments/:id` | Update a comment |
| DELETE | `/comments/:id` | Permanently delete a comment |

#### Comment Filters
- `post=<post_id>`
- `commenter=<name>`

## 🧪 Soft Delete Logic

- Soft-deleted records are excluded from queries by default.
- Updating or deleting a soft-deleted record returns 404.

## 🛠️ Setup

```bash
git clone https://github.com/yourusername/blogforge.git
cd blogforge
npm install
cp .env.example .env
npx knex migrate:latest
npm run dev
```

## 📦 Postman Collection

See `postman/BlogForge.postman_collection.json` for ready-to-use requests and examples.

## 🧠 Ideas

- Add authentication
- Pagination
- Image uploads

## 📜 License

MIT License.
