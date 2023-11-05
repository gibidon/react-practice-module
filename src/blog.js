import './App.css';
import { styled } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { Header, Footer } from './components';

const Content = styled.div`
	padding: 120px 0;
`;

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	background-color: #fff;
	margin: 0 auto;
`;
const H2 = styled.h2`
	text-aligh: center;
`;

export const Blog = () => {
	return (
		<AppColumn>
			<Header />

			<Content>
				<H2>Контент страницы</H2>
				<h2>Content</h2>
				<Routes>
					<Route
						path="/"
						element={<div>Главная страница</div>}
					/>
					<Route
						path="/login"
						element={<div>Авторизация </div>}
					/>
					<Route
						path="/register"
						element={<div>Регистрация</div>}
					/>
					<Route
						path="/users"
						element={<div>Пользователи</div>}
					/>
					<Route
						path="/post"
						element={<div>Новая статья</div>}
					/>
					<Route
						path="/post/:postId"
						element={<div>Статья</div>}
					/>
					<Route
						path="*"
						element={<div>Ошибка</div>}
					/>
				</Routes>
			</Content>
			<Footer />
		</AppColumn>
	);
};

// export default App;
